function abc( string ) {
  return string.replace(/[^ 0-9a-zA-ZшЎедц≈ƒ÷\.\^\-\]\\!@#$%&*()_+=`~}{['""|/?><,]/gi, '');
};

abc('test');
