import Layer from './Layer';

/**
 * 图片图层
 * @author tengge / https://github.com/tengge1
 */
function ImageLayer() {
    Layer.call(this);
}

ImageLayer.prototype = Object.create(Layer.prototype);
ImageLayer.prototype.constructor = ImageLayer;

ImageLayer.prototype.get = function (x, y, z) {

};

export default ImageLayer;