import { createTemplate } from "../create_template.ts";
import type { PackageProps, PackagePropsPath } from "../types/mod.ts";

export const srcTypesTypesTs = createTemplate<
  PackagePropsPath,
  PackageProps
>`/**
 * This file exports type aliases used by the the partic11e ${"pkg.name"} package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./interfaces.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */
`;
