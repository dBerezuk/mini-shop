class Action {
  form;
  data = {};

  constructor(form, productId) {
    this.form = form;

    this._data();
    this.data.productId = +productId;
  }

  _data() {
    this.form.querySelectorAll('input, select, textarea').forEach(_ => {
      if(_.type === 'radio') {
        if(_.checked) {
          this.data[_.name] = _.value;
        } else if(!(_.name in this.data) ) {
          this.data[_.name] = '';
        }
      } else if(_.type !== 'button') {
        this.data[_.name] = _.value;
      }
    });
    this.data.createAt = dateFormatDMY();
  }

  _error(name, text, check) {
    const error = this.form.querySelector(`[name=${name}]`).closest('.field').querySelector('.field__error');

    if(check) {
      error.textContent = text;
    } else {
      error.textContent = '';
    }
  }

  isError() {
    return !!this.form.querySelector('.field__error:not(:empty)');
  }
}

class Validate extends Action {
  constructor(form, productId) {
    super(form, productId);
  }

  required(name, text) {
    if(!this.data[name].trim().length) {
      this._error(name, text, true);
    } else {
      this._error(name, text, false);
    }
  }

  minNum(name, text, min) {
    if(!this.data[name].trim().length) return;

    if(+this.data[name] < min) {
      this._error(name, text, true);
    } else {
      this._error(name, text, false);
    }
  }
}