import { queryByAltText, render, screen, getByAltText, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('checks for broken images', () => {
  const {queryByAltText} = render(<App />); //creating a version of the webpage
  const brokenImages = [ "01", "24", "32", "36", "44", "47" ];
  for (let i=0;i<brokenImages.length; i++){
    let image = queryByAltText(`${brokenImages[i]}`);
    expect(image).not.toBeInTheDocument();
  }
});

test('checks the page functions properly', () => {
  const {getByAltText} = render(<App />); //creating a version of the webpage
  let headerImageTest =  getByAltText("header picture");
  let testImages = []
  const brokenImages = [ 1, 24, 32, 36, 44, 47 ];
  for (let i = 0; i < 50; i++) {
    if (!brokenImages.includes(i)) {
        const imageNumberString = i.toString().padStart(2, '0');
        testImages.push(imageNumberString);
    }
  }
  for (let i=0; i<testImages.length; i++){
    let selectedImageTest = getByAltText(`${testImages[i]}`);
    fireEvent.click(selectedImageTest);
    expect(headerImageTest === selectedImageTest);
  }
});