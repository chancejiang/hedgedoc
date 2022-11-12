/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import markdownItRegex from 'markdown-it-regex'
import type MarkdownIt from 'markdown-it'
import { replaceGistLink } from './replace-gist-link'
import { replaceLegacyGistShortCode } from './replace-legacy-gist-short-code'
import { GistFrame } from './gist-frame'
import type { ComponentReplacer } from '../../../components/markdown-renderer/replace-components/component-replacer'
import { MarkdownRendererExtension } from '../../../components/markdown-renderer/extensions/base/markdown-renderer-extension'
import { CustomTagWithIdComponentReplacer } from '../../../components/markdown-renderer/replace-components/custom-tag-with-id-component-replacer'

/**
 * Adds support for embeddings of GitHub Gists by detecting gist links and the legacy gist shortcode.
 */
export class GistMarkdownExtension extends MarkdownRendererExtension {
  public static readonly tagName = 'app-gist'

  public configureMarkdownIt(markdownIt: MarkdownIt): void {
    markdownItRegex(markdownIt, replaceGistLink)
    markdownItRegex(markdownIt, replaceLegacyGistShortCode)
  }

  public buildReplacers(): ComponentReplacer[] {
    return [new CustomTagWithIdComponentReplacer(GistFrame, GistMarkdownExtension.tagName)]
  }

  public buildTagNameAllowList(): string[] {
    return [GistMarkdownExtension.tagName]
  }
}
