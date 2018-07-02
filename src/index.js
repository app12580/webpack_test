import _ from 'lodash';
import './style.css';

function component() {
    var element = document.createElement('div');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack', '你好，世界'], ' ');
    element.classList.add('hello');


    return element;
}

document.body.appendChild(component());