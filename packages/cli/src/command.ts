import { Command as OclifCommand } from '@oclif/command'
import Enquirer from 'enquirer'
import { getProjectExamples,getProjectWorkspaces, workspaceRoot } from './utils/workspaces'

export abstract class Command extends OclifCommand {
  protected enquirer = new Enquirer()
  protected project = {
    root: workspaceRoot,
    workspaces: getProjectWorkspaces(),
    examples: getProjectExamples(),
  }
}
