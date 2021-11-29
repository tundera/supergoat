import { getPackages } from '@monorepo-utils/package-utils'
import execa from 'execa'
import findWorkspaceRoot from 'find-yarn-workspace-root'
import { readJSON } from 'fs-extra'
import path from 'path'

export const workspaceRoot = findWorkspaceRoot(process.cwd()) as string

export const getRootInfo = async () => {
  const manifest = await readJSON(path.resolve(workspaceRoot, 'package.json'))
  return {
    name: manifest.name,
    workspaces: [...manifest.workspaces.packages],
  }
}

export const getProjectWorkspaces = () => {
  return getPackages(workspaceRoot).filter(
    (workspace) => path.dirname(workspace.packageJSON.name) === '@monorepo',
  )
}

export const getProjectExamples = () => {
  return getPackages(workspaceRoot).filter(
    (workspace) => path.dirname(workspace.packageJSON.name) === '@examples',
  )
}

export const getWorkspaceNames = () => {
  const workspaces = getProjectWorkspaces()
  return workspaces.map(({ packageJSON }) => packageJSON.name.split(path.sep).pop())
}

export const startWorkspaces = (workspaces: string[], development = false) => {
  let args = ['wsrun']

  workspaces.forEach((workspace) => {
    args = args.concat(['-p', `@supergoat/${workspace}`])
  })

  args = args.concat(['-c', development ? 'dev' : 'start'])

  return execa('yarn', args, {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: ['ignore', 'inherit', 'inherit'],
  })
}

export const buildPackages = () => {
  return execa('yarn', ['ultra', '-r', '--silent', '--filter', 'packages/*', 'build'], {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: ['ignore', 'pipe', 'inherit'],
  })
}

export const typeCheck = async () => {
  try {
    await execa('yarn', ['tsc'], {
      cwd: workspaceRoot,
      env: {
        FORCE_COLOR: 'true',
      },
      stdio: ['ignore', 'pipe', 'inherit'],
    })
  } catch (err) {
    throw new Error(err as string)
  }
}

export const buildAllWorkspaces = async () => {
  await execa('yarn', ['build'], {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: ['ignore', 'pipe', 'inherit'],
  })

  await typeCheck()
}
