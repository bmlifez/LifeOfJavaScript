const data = {
    '/root': {
        path: '/root',
        isRoot: true,
        isFolder: true,
        children: ['/root/level1', '/root/level2']
    },
    '/root/level1': {
        path: '/root/level1',
        isRoot: false,
        isFolder: true,
        children: ['/root/level3']
    },
    '/root/level2': {
        path: '/root/level2',
        isRoot: false,
        isFolder: true,
        children: ['/root/level4']
    },
    '/root/level3': {
        path: '/root/level3',
        isRoot: false,
        isFolder: false,
        children: []
    },
    '/root/level4': {
        path: '/root/level4',
        isRoot: false,
        isFolder: false,
        children: []
    }
}

/*
Point to keep
1. Folder would be collapisble only if it is isFolder 
    && children Array is non empty
*/

let render = [];

const getRoot = () => {
    // filtering the data to find root
    for (let prop in data) {
        if (data[prop].isRoot) {
            return data[prop];
        }
    }
}

const viewTreeOnLoad = () => {
    render.push(getRoot());
}

const updateTreeRender = (path) => {
    for (let prop in data) {
        if (data[prop].isFolder && data[prop].children.length > 0) {
            data[prop].children.forEach((element) => {
                render.push(data[element]);
            });
        }
        if (data[prop].isFile) {
            render.push(data[prop]);
        }
    }
}

const getStyle = (element) => {
    return element.isFolder ? 'collapisble-css' : 'file-css';
}

viewTreeOnLoad();

var x = render;

document.getElementById('outerRootUl').innerHTML = '<li id="root" onClick="updateTreeRender(x[0])">' + x[0].path + '</li>';

document.getElementById('root').addEventListener('click', function (e) {
    console.log(e);
})

