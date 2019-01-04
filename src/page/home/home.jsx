import React, { Component } from 'react'

class Home extends Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        saveFormData: PropTypes.func.isRequired,
        saveImg: PropTypes.func.isRequired,
        clearData: PropTypes.func.isRequired,
        clearSelected: PropTypes.func.isRequired
    }

    state = {
        alertStatus: false, //弹框状态
        alertTip: '', //弹框提示文字
    }

    /**
* 已选择的商品数据
* @type {Array}
*/
    selectedProList = [];

    /**
     * 将表单数据保存至redux，保留状态
     * @param  {string} type  数据类型 orderSum||name||phoneNo
     * @param  {object} event 事件对象
     */
    handleInput = (type, event) => {
        let value = event.target.value;
        switch (type) {
            case 'orderSum':
                value = value.replace(/\D/g, '');
                break;
            case 'name':
                break;
            case 'phoneNo':
                value = this.padStr(value.replace(/\D/g, ''), [3, 7], ' ', event.target);
                break;
            default: ;
        }
        this.props.saveFormData(value, type);
    }

    /*
上传图片，并将图片地址存到redux，保留状态
 */
    uploadImg = async event => {
        try {
            let formdata = new FormData();
            formdata.append('file', event.target.files[0]);
            let result = await API.uploadImg({ data: formdata });
            this.props.saveImg(envconfig.imgUrl + result.image_path);
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }


    render () {
        return (
            <main className="home-container">
                
            </main>
        )
    }
}