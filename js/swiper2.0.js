var swiper = (function () {
    
    var obj,
    $bannerBox,
    $tipBox,
    $tipAll,
    $prevBtn,
    $nextBtn,
    imgWidth,
    index = 0;

    return {
        init(ele) {
            obj = document.querySelector(ele);
            imgWidth = obj.clientWidth;
            console.log(imgWidth);
            // 获取上一页按钮
            $prevBtn = obj.querySelector('.jiantou1');
            $nextBtn = obj.querySelector('.jiantou2');
            // 获取下一页按钮
            $bannerBox = obj.firstElementChild.nextElementSibling;
            console.log($bannerBox);
            $tipBox = $bannerBox.nextElementSibling;
            $tipAll = $tipBox.children;
            // 给所有小圆点添加index
            for(let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].index = i;
            }
            this.event()
        },
        event() {
            const self = this;
            $tipBox.addEventListener('click', function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'LI') {
                    index = target.index;
                    self.showImage();
                }
            }, false)
            $prevBtn.onclick = function() {
                index--;
                self.showImage()
            }
            $nextBtn.onclick = function() {
                index++;
                self.showImage()
            }
            // console.log(obj);
        },
        showImage() {
            console.log(index)
            // 展示对应的图片
            // 对应的小圆点
            if(index < 0) {
                index = 0;
            } else if(index > $tipAll.length - 1) {
                index = $tipAll.length - 1;
            }
            for(let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].classList.remove('dot');

            }
            $tipAll[index].classList.add('dot');
            move($bannerBox, {left: -(index) * imgWidth}, 500)
        }
    }
}())
