import BaseEvent from '../BaseEvent';

/**
 * 拖动事件
 * @author tengge / https://github.com/tengge1
 * @param {*} app 
 */
function DraggableEvent(app) {
    BaseEvent.call(this, app);
}

DraggableEvent.prototype = Object.create(BaseEvent.prototype);
DraggableEvent.prototype.constructor = DraggableEvent;

DraggableEvent.prototype.start = function () {
    var visual = this.app.editor.visual;
    var component = null;

    var drag = d3.drag()
        .on('start', function () {
            var target = d3.event.sourceEvent.target;

            var id = d3.select(target).attr('data-id');

            if (!id) {
                return;
            }

            component = visual.get(id);
        })
        .on('drag', function () {
            if (!component) {
                return;
            }

            if (component.setTranslate) {
                component.setTranslate(d3.event.dx, d3.event.dy);
            }
        })
        .on('end', function () {
            component = null;
        });

    d3.select(this.app.editor.svg)
        .call(drag);
};

DraggableEvent.prototype.stop = function () {

};

export default DraggableEvent;