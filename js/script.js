// Proseguendo l'esercitazione (snackone) in classe, creare una todolist dove l'utente potrà:
// scrivere in un input
// premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
// visualizzare tutte le note nel box sottostante
// cancellare la nota, cliccando sulla X corrispondente
// Bonus:
// lavorate lato CSS, per rendere la todolist più carina seguendo la vostra creatività.

new Vue({
  el: '#app',
  data: {
    list: [

    ],
    currentItem: ''
  },
  methods: {
  addToList: function() {
    this.list.push(this.currentItem);
  }
}
})
Vue.config.devtools = true;
