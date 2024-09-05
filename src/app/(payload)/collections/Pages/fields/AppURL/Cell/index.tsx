
"use client";

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from "react";
import { Pill } from "@payloadcms/ui";
import { formatAppURL } from "../../formatAppURL";
import "./index.scss";

export const AppUrlCell: React.FC<{
  rowData?: {
    breadcrumbs: any;
  };
  children: React.ReactNode;
}> = ({ rowData }) => {
  // Safely destructure breadcrumbs with a fallback value
  const breadcrumbs = rowData?.breadcrumbs;
  const href = formatAppURL(breadcrumbs);

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hope__preview-btn"
      >
        <Pill>View page</Pill>
      </a>
    );
  }
  return null;
};
