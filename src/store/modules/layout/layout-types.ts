export interface Layout {
  id: number,
  nome: string,
  categoria: string,
  tipo_arquivo: arquivo,
  tipo_layout: layout,
  delimitadores: delimitadores,
  referencia: string
}

enum arquivo {
  xls = 'xls',
  csv = 'csv',
  txt = 'txt',
  xml = 'xml'
}

enum layout {
  posicional = 'posicional',
  delimitado = 'delimitado'
}

enum delimitadores {
  ",",
  "/",
  "|",
  ".",
  ";"
}
