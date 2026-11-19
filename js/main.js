import { mockDateGenerator } from './moke-generator.js';
import { MockConfig, RenderPictureConfig } from './configs.js';
import { renderPictures } from './render-pictures.js';

const mockData = mockDateGenerator(MockConfig);
renderPictures('.pictures', mockData, RenderPictureConfig);
