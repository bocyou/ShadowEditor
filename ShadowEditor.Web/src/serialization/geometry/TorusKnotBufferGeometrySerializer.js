import BaseSerializer from '../BaseSerializer';
import BufferGeometrySerializer from './BufferGeometrySerializer';

/**
 * TorusKnotBufferGeometrySerializer
 * @author tengge / https://github.com/tengge1
 */
function TorusKnotBufferGeometrySerializer() {
    BaseSerializer.call(this);
}

TorusKnotBufferGeometrySerializer.prototype = Object.create(BaseSerializer.prototype);
TorusKnotBufferGeometrySerializer.prototype.constructor = TorusKnotBufferGeometrySerializer;

TorusKnotBufferGeometrySerializer.prototype.toJSON = function (obj) {
    return BufferGeometrySerializer.prototype.toJSON.call(this, obj);
};

TorusKnotBufferGeometrySerializer.prototype.fromJSON = function (json, parent) {
    var obj = parent === undefined ? new THREE.TorusKnotBufferGeometry(
        json.parameters.radius,
        json.parameters.tube,
        json.parameters.tubularSegments,
        json.parameters.radialSegments,
        json.parameters.p,
        json.parameters.q
    ) : parent;

    BufferGeometrySerializer.prototype.fromJSON.call(this, json, obj);

    return obj;
};

export default TorusKnotBufferGeometrySerializer;