export class ApiComponent {
  constructor() {
  }

  //Проверяет успешен ли запрос и возвращает его, либо отклоняет промис
  _getResJson(res) {
    if (res.ok) {
      return res.json();
    }
    return new Promise.reject(res.status);
  }
}
