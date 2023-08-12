import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id'
import { getRecord } from 'lightning/uiRecordApi';
import USER_FIRST_NAME from '@salesforce/schema/User.FirstName'
import USER_LAST_NAME from '@salesforce/schema/User.LastName'
import USER_EMAIL_NAME from '@salesforce/schema/User.Email'
import USER_PHONE_NAME from '@salesforce/schema/User.Phone'

export default class CurrentUserDetails extends LightningElement {
    userId =Id
    userFirstName
    userLastName
    userEmailName
    userUserName
@wire(getRecord,{recordId: Id,fields:[USER_FIRST_NAME,USER_LAST_NAME,USER_EMAIL_NAME,USER_PHONE_NAME]})

CurrentUserDetails11({data,error}){
    if(data){
        this.userFirstName = data.fields.FirstName.value
        this.userLastName = data.fields.LastName.value
        this.userEmail = data.fields.Email.value
        this.userPhone = data.fields.Phone.value
        console.log('data from Current User Record Wire::',data)
    }
    else if (error){
        console.error(error)
    }
}

}