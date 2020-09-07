// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hello, lại là anh boss đây",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Hôm nay 7/9, sinh nhật 2 cô bé của team là Shark và Mei",  // 同上...
        "Cảm ơn 2 em vì đã gắn bó với team, anh chúc 2 đứa có một ngày sinh nhật thật vui nhé",
        "Anh đã gom lại câu chúc của mọi người gửi tới hai tụi em",
        "Ai thích câu nào thì nhận câu đó nha :)))",
        "Sinh nhật vui vẻeee 🎉 chúc hai bồ luôn đạt được những gì mình muốn - fairy",
        "Chúc 2 chị sinh nhật vui vẻ, ngày càng xinh hơn, hát hay hơn để hát cho em nghe ké 😊😊😊 - Kikumaru",
        "Chúc bé shark tuổi mới bớt cục súc hơn. Học giỏi và mau lớn - Tiếu",
        "Chúc Mei học giỏi thi đại học năm nay đạt được điểm cao - Tiếu :v",
        "Iu Shark và Mie nhiềuuuuuu - Đào Ngọt",
        "Chúc mừng sinh nhật vui vẻ, chúc Shark và Mei càng ngày càng đẹp gái hơn - Michael",
	"2 bạn gái cute sinh nhật vui vẻ nhé ^^ - Neji",
	"Chúc bé Shark và Mei thêm tuổi mới càng ngày càng dễ thương, học thật giỏi, chơi minigame team mình thua thật nhiều để bị dare show mặt :> - Ẩn danh",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bật đèn lên nào",
        play: "Mở nhạc nhé",
        bannar_coming: "Trang trí thôi",
        balloons_flying: "Thổi bong bóng nào",
        cake_fadein: "Đây là chiếc bánh kem tuyệt vời nhất đó nha",
        light_candle: "Thắp nến đi em",
        wish_message: "Chúc mừng sinh nhật Shark và Mie nhé!",
        story: "Đôi lời muốn nói với 2 đứa tụi em",
    }
};
