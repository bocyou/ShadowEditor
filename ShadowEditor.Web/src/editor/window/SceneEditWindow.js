import UI from '../../ui/UI';
import Ajax from '../../utils/Ajax';

/**
 * 编辑场景窗口
 * @author tengge / https://github.com/tengge1
 * @param {*} options 
 */
function SceneEditWindow(options) {
    UI.Control.call(this, options);
    this.app = options.app;
}

SceneEditWindow.prototype = Object.create(UI.Control.prototype);
SceneEditWindow.prototype.constructor = SceneEditWindow;

SceneEditWindow.prototype.render = function () {
    var container = UI.create({
        xtype: 'window',
        id: 'window',
        scope: this.id,
        parent: this.parent,
        title: '编辑场景',
        width: '320px',
        height: '400px',
        shade: false,
        children: [{
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '名称'
            }, {
                xtype: 'input',
                id: 'name',
                scope: this.id
            }]
        }, {
            xtype: 'row'
        }, {
            xtype: 'row',
            style: {
                justifyContent: 'center'
            },
            children: [{
                xtype: 'button',
                text: '确定',
                style: {
                    margin: '0 8px'
                }
            }, {
                xtype: 'button',
                text: '取消',
                style: {
                    margin: '0 8px'
                }
            }]
        }]
    });
    container.render();
};

SceneEditWindow.prototype.show = function () {
    UI.get('window', this.id).show();
};

SceneEditWindow.prototype.hide = function () {
    UI.get('window', this.id).hide();
};

SceneEditWindow.prototype.setData = function (data) {
    this.data = data;
    this.updateUI();
};

SceneEditWindow.prototype.updateUI = function () {
    if (this.data === undefined) {
        return;
    }

    var name = UI.get('name', this.id);
    name.setValue(this.data.Name);
};

export default SceneEditWindow;