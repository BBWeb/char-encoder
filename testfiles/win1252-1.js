function abc( string ) {
  return string.replace(/[^ 0-9a-zA-Z��������\.\^\-\]\\!@#$%&*()_+=`~}{['""|/?><,]/gi, '');
};

abc('test');
