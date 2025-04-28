import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Componente Home', () => {
  // Teste 1: Verifica se o componente renderiza corretamente
  test('deve renderizar corretamente o componente Home', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Teste 3');
  });

  // Teste 2: Verifica se o título h1 com o texto "Teste 3" está presente
  test('deve exibir um título h1 com o texto "Teste 3"', () => {
    render(<Home />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Teste 3');
  });

  // Teste 3: Verifica se o elemento <main> está presente
  test('deve renderizar o elemento <main>', () => {
    render(<Home />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  // Teste 4: Verifica se há apenas um título h1
  test('deve renderizar apenas um título h1', () => {
    render(<Home />);
    const h1Elements = screen.getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);
  });

  // Teste 5: Verifica se o título é realmente do tipo <h1>
  test('deve renderizar um título do tipo <h1>', () => {
    render(<Home />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title.tagName).toBe('H1');
  });

  // Teste 6: Verifica se o conteúdo da página não é nulo ou vazio
  test('deve renderizar conteúdo não vazio no componente', () => {
    render(<Home />);
    const mainContent = screen.getByRole('main');
    expect(mainContent).not.toBeEmptyDOMElement();
  });
});
