class DonateController {
  /**@ngInject*/
  constructor($uibModalInstance, stripe, $http, HOST) {
    this.$uibModalInstance = $uibModalInstance;
    this.stripe = stripe;
    this.$http = $http;
    this.HOST = HOST;
  }

  donate() {
    this.stripe.card.createToken({
      number: this.donateForm.cardNumber,
      cvc: this.donateForm.cardSecurityCode,
      exp_month: this.donateForm.exp_month,
      exp_year: this.donateForm.exp_year
    })
    .then((res) => {
      console.log('res from stripe', res);
      this.$http.post(`${this.HOST}/stripe/donate`, {
        stripe: res,
        amount: this.donateForm.amount,
        user: {
          firstName: this.donateForm.firstName,
          lastName: this.donateForm.lastName
        }
      })
      .then((res) => {
        this.closeModal();
      })
      .catch((err) => {
        console.error('ERROR IN TEST DONATION', err);
        alert('An error occurred when donating funds, please try again');
      });
    })
    .catch((err) => {
      alert(err);
    });
  }

  closeModal() {
    this.$uibModalInstance.dismiss();
  }
};

export default DonateController;
