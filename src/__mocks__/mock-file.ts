export class MockFile implements File {
  lastModified: number;
  name: string;
  webkitRelativePath: string;
  type: string;
  content: string;

  constructor(content: string, name: string, options: { type: string }) {
    this.content = content;
    this.name = name;
    this.type = options.type;
    this.lastModified = Date.now();
    this.webkitRelativePath = '';
  }

  text(): Promise<string> {
    return Promise.resolve(this.content);
  }

  // Add other Blob and File methods as placeholders
  arrayBuffer(): Promise<ArrayBuffer> {
    return Promise.resolve(new ArrayBuffer(0)); // Placeholder
  }

  slice(start?: number, end?: number, contentType?: string): Blob {
    return new Blob(); // Placeholder
  }

  stream(): ReadableStream<Uint8Array> {
    return new ReadableStream<Uint8Array>(); // Placeholder
  }

  size: number = 0; // Placeholder
}
