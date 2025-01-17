/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ADDED_TO_CART_DIALOG_COMPONENT,
  INCREMENT,
  ORDER_PROMOTIONS$,
  TODO_SPARTACUS,
} from '../../../../shared/constants';
import { SPARTACUS_STOREFRONTLIB } from '../../../../shared/libs-constants';
import { MethodPropertyDeprecation } from '../../../../shared/utils/file-utils';

export const ADDED_TO_CART_DIALOG_COMPONENT_MIGRATION: MethodPropertyDeprecation[] =
  [
    {
      class: ADDED_TO_CART_DIALOG_COMPONENT,
      importPath: SPARTACUS_STOREFRONTLIB,
      deprecatedNode: INCREMENT,
      comment: `// ${TODO_SPARTACUS} Property '${ADDED_TO_CART_DIALOG_COMPONENT}.${INCREMENT}' was removed. Please set 'numberOfEntriesBeforeAdd' property instead`,
    },
    {
      class: ADDED_TO_CART_DIALOG_COMPONENT,
      importPath: SPARTACUS_STOREFRONTLIB,
      deprecatedNode: ORDER_PROMOTIONS$,
      comment: `// ${TODO_SPARTACUS} Property '${ADDED_TO_CART_DIALOG_COMPONENT}.${ORDER_PROMOTIONS$}' was removed. The component may get promotions directly from the cart.`,
    },
  ];
