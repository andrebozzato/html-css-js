interface Post {
  id: number
  title: string
  description: string
}

// pick - serve para selecionar algumas propriedades de uma interface ou tipo, e com base nestas propriedades criar um novo tipo

// omit - faz o contrario, com base em uma interface ou tipo, a gente seleciona algumas propriedades para omit, e pega o restante e cria um novo tipo

// pick
type PostPreview = Pick<Post, 'id' | 'title'>

let post: PostPreview

post = { id: 12, title: 'asdfasd' }

//omit
type DescriptionPostPreview = Omit<Post, 'id' | 'title'>

let descrPost: DescriptionPostPreview = { description: 'alsnozmaowenacs asdf' }
