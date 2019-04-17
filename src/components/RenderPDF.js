import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Segment } from "semantic-ui-react";

import resume from "../resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class RenderPDF extends Component {
  render() {
    return (
      <Segment compact>
        <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
      </Segment>
    );
  }
}
export default RenderPDF;
