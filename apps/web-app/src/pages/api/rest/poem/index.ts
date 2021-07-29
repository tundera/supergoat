import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@/backend/config/container.config';
import { MethodNotAllowed } from '@tsed/exceptions';
import { JsonApiResponseFactory } from '@monorepo/core/api/json-api';
import { JsonApiErrorFactory } from '@monorepo/core/api/json-api/json-api-error.factory';
import { PoemRepositorySsr } from '@/backend/api/rest/poem-repository.ssr';

export default async function handleListPoems(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const poemRepo = new PoemRepositorySsr(prismaClient);
    try {
      return res.json(
        JsonApiResponseFactory.fromSuccess(
          await poemRepo.getPoems({
            limit: 100,
          })
        )
      );
    } catch (e) {
      const apiError = JsonApiErrorFactory.fromTsedException(e);
      return res
        .status(apiError.status ?? 500)
        .json(JsonApiResponseFactory.fromError(apiError));
    }
  } else {
    return res
      .status(MethodNotAllowed.STATUS)
      .json(
        JsonApiResponseFactory.fromError(
          `The HTTP ${req.method} method is not supported at this route.`,
          MethodNotAllowed.STATUS
        )
      );
  }
}
