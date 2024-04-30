import Categori, {  Categoria } from '../models/Categoria';

async function CriarCategoria(CategoriaData: Categoria): Promise<Categoria> {
  return await Categori.create(CategoriaData);
}

async function BuscarUsuario(UsarIdId: string): Promise<Categoria> {
  return await Categori.find({ user: UsarIdId });
}

async function updateCategoria(categoriaId: string, categoriaData: Partial<Categoria>): Promise<Categoria | null> {
  return await Categori.findByIdAndUpdate(categoriaId, categoriaData, { new: true });
}

async function DeletarCategoria(categoriaId: string): Promise<Categoria | null> {
  return await Categori.findByIdAndDelete(categoriaId);
}

export { CriarCategoria, BuscarUsuario, updateCategoria, DeletarCategoria };
