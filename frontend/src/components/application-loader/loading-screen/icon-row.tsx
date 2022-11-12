/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import React, { useMemo } from 'react'
import { createNumberRangeArray } from '../../common/number-range/number-range'
import { RandomIcon } from './random-icon'
import styles from './animations.module.scss'

/**
 * Shows a number of {@link RandomIcon random icons in a row}.
 */
export const IconRow: React.FC = () => {
  const children = useMemo(() => createNumberRangeArray(5).map((index) => <RandomIcon key={index}></RandomIcon>), [])

  return <div className={styles.row}>{children}</div>
}
