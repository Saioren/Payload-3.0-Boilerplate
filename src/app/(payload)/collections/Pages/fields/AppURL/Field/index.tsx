
'use client'

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useWatchForm, CopyToClipboard } from '@payloadcms/ui';
import { formatAppURL } from '../../formatAppURL';
import type { UIField } from 'payload';
import './index.scss';

export const AppUrlField: React.FC<UIField & {
  children: React.ReactNode
}> = () => {
  const { getDataByPath } = useWatchForm();
  const breadcrumbs = getDataByPath('breadcrumbs');
  const href = formatAppURL(breadcrumbs);

  return (
    <div>
      <div>
        <span className="label">
          APP URL
        </span>
        <CopyToClipboard
          value={href as string}
        />
      </div>
      <div>
        <a
          href={href as string}
          target="_blank"
          rel="noopener noreferrer"
          className="personUrlField"
        >
          {href}
        </a>
      </div>
    </div>
  );
};
