export async function blobToDataUrl(blob: Blob) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      if (reader.result) {
        resolve(reader.result as string);
      }
    };
  });
}

export async function dataUrlToBlob(dataUrl: string, type?: string) {
  const [, data] = dataUrl.split(',');
  const mimePattern = /^data:(.*?)(;base64)?,/;
  const [, mime] = dataUrl.match(mimePattern);
  const binStr = atob(data);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  return new Blob([arr], { type: type || mime });
}
