<template>
    <div class="Payment">
      <div class="container">
        <div class="title"> <img src="./../assets/image/safe.png" alt="">Безопасная оплата и доставка</div>
        <div class="payment_area">
          <div class="form" v-for="item in post" :key="item.index">
            <div class="payment_title">{{ item.payment_title }}</div>
            <div class="payment_row" v-for="val in item.type" :key="val.index">
              <label>
                <input type="radio" :value="val.input_title" :id="val.index" v-model="item.model">
                {{ val.input_title }}
              </label>
              <div class="price">{{ val.price }}</div>
            </div>
          </div>
          <div class=" form form2" v-for="item in post2" :key="item.index">
            <div class="payment_title">{{ item.payment_title }}</div>
            <div class="payment_row second_row">
              <div class="label_street" v-for="val in item.adress" :key="val.index">
                <div>{{val.select_title}}</div>
                <select v-model="val.model">
                  <option v-for="select in val.city" :key="select.index">{{select.name}}</option>
                </select>
              </div>
              <label class="up">
                <input type="checkbox" v-model="item.model">
                Нужен подъём на этаж
              </label>
              <div class="house">
                <div class="house_item" v-for="item in post4" :key="item.index">
                  <div>{{item.title}}</div>
                  <input type="number" :placeholder="item.placeholder" class="input_home" v-model="item.model">
                </div>
              </div>
           </div>
          </div>
          <div class="form form3" v-for="item in post3" :key="item.index">
            <div class="payment_title" >
              {{ item.payment_title }}
            </div>
            <div class="row3" v-for="val in item.user" :key="val.index">
              <div class="form_title">
                {{ val.title }}
              </div>
              <div class="form_input">
                <input :type="val.type" :placeholder="item.name" v-for="item in val.placeholder" :key="item.index" v-model="item.model">
              </div>
            </div>
          </div>
        </div>
        <div class="price_btn">
          <div class="price_btn_title">Общая сумма:</div>
          <div class="price_btn_number">221 855,79 р. <span>(без НДС)</span></div>
          <router-link to="/"><button type="submit">ПЕРЕЙТИ К ОПЛАТЕ</button></router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  data () {
    return {
      post: [
        {
          model: '',
          payment_title: '1. Выберите способ доставки',
          type: [
            { input_title: 'Доставка по DHL', price: '2 046,79 р.' },
            { input_title: 'Почта России (EMS)', price: '2080,35 р.' },
            { input_title: 'UPS', price: '3530,75 р.' }
          ]
        },
        {
          model: '',
          payment_title: '2. Выберите способ оплаты',
          type: [
            { input_title: 'PayPal', price: '219 809 р.' },
            { input_title: 'Предоплата', price: '219 809 р.' },
            { input_title: 'Оплата кредитной картой', price: '219 809 р.' }
          ]
        }
      ],
      post2: [
        {
          payment_title: '3. Выберите адрес доставки',
          adress: [
            {
              select_title: 'Выберите населенный пункт',
              model: '',
              city: [
                { name: 'Москва' },
                { name: 'Иркутск' },
                { name: 'Белово' },
                { name: 'Магадан' }
              ]
            },
            {
              select_title: 'Улица',
              model: '',
              city: [
                { name: 'Московская' },
                { name: 'Иркутская' },
                { name: 'Беловская' },
                { name: 'Магаданская' }
              ]
            }
          ]
        }
      ],
      post3: [
        {
          model: '',
          payment_title: '4. Введите данные получателя',
          user: [
            {
              type: 'text',
              title: 'Введите ваши имя и фамилию',
              placeholder: [
                { name: 'Имя' },
                { name: 'Фамилия' }
              ]
            },
            {
              type: 'number',
              title: 'Введите серию и номер паспорта',
              placeholder: [
                { name: '10 10' },
                { name: '555 555' }
              ]
            },
            {
              type: 'number',
              title: 'Введите контактный телефон',
              placeholder: [
                { name: '+7' },
                { name: '555 555 55 55' }
              ]
            }
          ]
        }
      ],
      post4: [
        { title: 'Дом', placeholder: 'номер дома' },
        { title: 'Квартира', placeholder: 'номер квартиры' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.payment_area{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.title{
  font-size: 2rem;
  line-height: 2.3rem;
  text-align: left;
}
.payment_title{
font-size: 1.5rem;
line-height: 2rem;
color: #1DA1F2;
text-align: left;
}
.form{
  box-sizing: border-box;
  flex-basis:50%;
  padding: 17.5px 20px;
  @media screen and (max-width: 860px){
    flex-basis:100%;
  }
}
.payment_row{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #C7C7C7;
  padding: 1rem 0px;
  & .label_street:first-child{
  padding-right: 20px;
  @media screen and (max-width: 490px){
    padding:0px;
  }
  }
}
.label_street{
  box-sizing: border-box;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  & select{
    width: 100%;
  }
  @media screen and (max-width: 490px){
    width: 100%;
  }
}
select, .input_home, .row3 input{
  padding: 14px 17px;
  background: #FFFFFF;
  border: 1px solid #8C8C8C;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  margin: 20px 0;
}
.second_row{
  flex-wrap: wrap;
  align-items: flex-end;
  border: none;
}
.house{
  flex-basis: 50%;
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-wrap: wrap;
  & label{
    box-sizing: border-box;
    width: 50%;
    display: flex;
    justify-content: flex-start;
  }
}
.house_item{
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 490px){
    width: 100%;
  }
}
.label_house{
  flex-wrap:wrap;
}
.row3{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 17.5px;
}
.form_title, .label_street, .house_item div{
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
}
.form_input{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:nth-child(2){
    flex-wrap: wrap;
  }
  & input:first-child {
    width: 50px;
    margin-right: 1rem;
    text-align: center;
    @media screen and (max-width: 420px){
      margin-right:0px;
    }
  }
}
.row3:nth-child(2){
  width: 100%;
  & input{
    width: 50%;
    text-align: left;
    @media screen and (max-width: 420px){
      width: 100%;
      margin-right:0px;
    }
  }
}
.up{
  margin-bottom: 20px;
}
.price_btn{
  padding-right: 10px;
  text-align: right;
  font-size: 2rem;
  line-height: 34px;
  white-space: nowrap;
  @media screen and (max-width: 576px){
    font-size: 1.2rem;
  }
  & .price_btn_number{
    color:#7F00FF;
    padding: 10px 0px 20px 0px;
    & span{
      color: #c7c7c7;
      font-size: 1rem;
    }
  }
  & button{
    background: linear-gradient(90deg, #7F00FF 0%, #E100FF 100%);
    box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.24);
    border-radius: 4px;
    border: none;
    padding: 14px 17px;
    color: #fff;
  }
}
</style>
