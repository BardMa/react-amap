import { getAMapPosition, getAMapPixel } from './utils';

export const MarkerConfigurableProps = [
  'position',
  'offset',
  'icon',
  'content',
  'draggable',
  'visible',
  'zIndex',
  'angle',
  'animation',
  'shadow',
  'title',
  'clickable',
  'cursor',
  'extData',
  'label'
];

export const MarkerAllProps = MarkerConfigurableProps.concat([
  'topWhenClick',
  'bubble',
  'raiseOnDrag',
  'cursor',
  'autoRotation',
  'shape',
]);



export const getPropValue = (key, value) => {
  if (MarkerAllProps.indexOf(key) === -1) {
    return null;
  }
  if (key === 'position') {
    return getAMapPosition(value);
  } else if (key === 'offset') {
    return getAMapPixel(value)
  }
  return value;
};