function Public(option) {
    this._init(option);
}
Public.prototype = {
    constructor : Public,
    _init: function(option) {
        option = option || {};
        this.form = option.form || 'user';
        this.phone = option.phone || '';
        this.password = option.password || '';
    },

    // 请求方法
    getData: function(my) {
        const self = this;
        let obj;
        $.ajax({
            url: '../page.json',
            type: 'GET',
            dataType: 'json',
            async: false,
            success: function (data) {
                if(data.hasOwnProperty(self.form)) {
                    const key = self.form;
                    obj = data[key];
                }else {
                    obj = '错误,没有找到';
                }
            },
            error: function(eee) {
                console.log(eee);
            }
        });
        return obj;
    },
    // 获取所有用户
    getUser: function() {
        const users = JSON.parse(localStorage.getItem('users'));
        return users;
    },
    // 自动注册10个用户
    autoRegistered: function() {
        const arr = []
        for(let i = 0; i <= 9; i++) {
            const obj = {};
            obj.phone = '1' + i;
            obj.password = '123456';
            obj.id = _.random(100000, 999999);
            obj.photo = '../../core/images/portrait.png';
            arr.push(obj);
        }
        
        JSON.stringify(arr);
        localStorage.setItem('users',JSON.stringify(arr));
    },
    loginUser: function() {

    },
    // 注册
    newUser: function() {
        if(this.phone === '') {
            return '请输入注册手机号';
        }
        if(this.password === '') {
            return '请输入用户密码';
        }
        const id = _.random(100000, 999999);
        const arr = this.getUser();
        const obj = {};
        obj.phone = this.phone;
        obj.password = this.password;
        obj.id = id;
        obj.photo = '../../core/images/portrait.png';
        arr.push(obj);
        JSON.stringify(arr);
        localStorage.setItem('users',JSON.stringify(arr));
        return '注册成功';
    }

}