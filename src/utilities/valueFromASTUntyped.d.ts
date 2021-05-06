import { Maybe } from '../jsutils/Maybe';
import { ReadOnlyObjMap } from '../jsutils/ObjMap';

import { ValueNode } from '../language/ast';

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 * @deprecated use literalToValue
 */
export function valueFromASTUntyped(
  valueNode: ValueNode,
  variables?: Maybe<ReadOnlyObjMap<unknown>>,
): unknown;
