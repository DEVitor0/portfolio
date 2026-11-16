import React from "react";
import htm from "htm";

/**
 * Tag dos templates `h\`<div>...</div>\``.
 * Em build, o plugin `babel-plugin-htm` (vite.config.js) compila todos os
 * templates para React.createElement — o runtime do htm não vai para o bundle.
 */
export const h = /*#__PURE__*/ htm.bind(React.createElement);
