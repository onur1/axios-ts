import * as t from 'io-ts'
import { failure } from 'io-ts/lib/PathReporter'
import { mapLeft } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { Expect } from './Client'

export function expected<A>(type: t.Type<A, any, unknown>): Expect<A> {
  return value =>
    pipe(
      type.decode(value),
      mapLeft(errors => failure(errors).join('\n'))
    )
}
