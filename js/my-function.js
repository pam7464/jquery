function fnFlexItemWidth(){
    let setBox = $('.flex-box>div');
    let conWidth = $('.container').width();
    let setWidth = (conWidth - 12) / 2;    
    setBox.css({width:setWidth,});
}

function loadEvent(leftBox,rightBox){    
    leftBox.css({
        transform:'translateX(0)',
        opacity:'1',
    })
    rightBox.css({
        transform:'translateX(0)',
        opacity:'1',
    })
}
