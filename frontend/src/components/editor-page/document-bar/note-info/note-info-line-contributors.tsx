/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import React from 'react'
import { Trans } from 'react-i18next'
import { UnitalicBoldContent } from './unitalic-bold-content'
import { NoteInfoLine } from './note-info-line'
import { useApplicationState } from '../../../../hooks/common/use-application-state'

/**
 * Renders an info line about the number of contributors for the note.
 */
export const NoteInfoLineContributors: React.FC = () => {
  const contributors = useApplicationState((state) => state.noteDetails.editedBy.length)

  return (
    <NoteInfoLine icon={'users'} size={'2x'}>
      <Trans i18nKey={'editor.modal.documentInfo.usersContributed'}>
        <UnitalicBoldContent text={contributors} />
      </Trans>
    </NoteInfoLine>
  )
}
