<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// function onClick(e) {
//   var name = document.querySelector('#contactFullName');
//   var email = document.querySelector('#contactEmail');
//   var subject = document.querySelector('#contactSubject');
//   var text = document.querySelector('#contactTextarea');

//   if (name.value == '' || email.value == '' || subject.value == '' || text.value == '') {
//     alert(document.querySelector('#contactMessageError').innerHTML)

//     return false;
//   } else {
//     grecaptcha.ready(function() {
//       grecaptcha.execute('6LdrppAbAAAAAAJ0ejVUfu0byNh498nGCHXqHmq2', {action: 'submit'}).then(function(token) {
//         if(token){
//           var http = new XMLHttpRequest();
//           var form = document.getElementById('contact_form');
//           var url = form.getAttribute('data-action');
//           var params = 'name='+name.value+'&email='+email.value+'&subject='+subject.value+'&description='+text.value;

//           http.open('POST', url, true);
//           http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//           http.onreadystatechange = function() {
//             if (http.readyState == 4 && http.status == 200) {
//               alert(document.querySelector('#contactMessageOk').innerHTML);
//               window.location.reload();
//             }
//           }
//           http.send(params);
//           }
//         });
//     });
//   }
// }
import instaLogo from '../assets/icon/insta.svg'
import whatsLogo from '../assets/icon/whats.svg'
import behanceLogo from '../assets/icon/behance.svg'

const contacts = [
  {
    id: 1,
    type: 'Instagram',
    url: 'https://www.instagram.com/yourprofile',
    logo: instaLogo,
  },
  {
    id: 2,
    type: 'WhatsApp',
    url: 'https://wa.me/+559999?text=Oi%20Reinaldo,%20tudo%20bem?%20Estou%20entrando%20em%20contato%20contigo%20através%20do%20teu%20site',
    logo: whatsLogo,
  },
  {
    id: 3,
    type: 'Behance',
    url: 'https://www.behance.net/yourprofile',
    logo: behanceLogo,
  },
]
</script>
<template>
  <div class="container mt-5 mb-5" id="contact">
    <p class="sections-title">{{ t('contact.section-title') }}</p>
    <p class="contact-description">{{ t('contact.section-description') }}</p>

    <div class="col-lg-8 centered">
      <div id="contact_form" data-action="<?= site_url('contato/enviar'); ?>" data-method="post">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="name"
              id="contactFullName"
              required
              autocomplete="off"
              :placeholder="t('contact.form.name')"
            />
          </div>
          <div class="col">
            <input
              type="email"
              class="form-control"
              name="email"
              id="contactEmail"
              :placeholder="t('contact.form.email')"
              required
              autocomplete="off"
            />
          </div>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="subject"
            id="contactSubject"
            :placeholder="t('contact.form.subject')"
            required
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            name="description"
            id="contactTextarea"
            :placeholder="t('contact.form.message')"
            rows="3"
            required
          ></textarea>
        </div>
        <button
          onclick="onClick(this)"
          type="submit"
          name="submit-contact"
          id="submit-contact"
          class="btn drop-button button-blue mt-5 mb-5"
        >
          {{ t('button.send') }}
        </button>
      </div>
    </div>
    <div v-if="contacts.length > 0">
      <p class="findme-title mt-5 mb-1">{{ t('contact.section-social') }}</p>
      <div class="findme-container mt-5">
        <p class="findme-links" v-for="contact in contacts">
          <a target="_blank" :href="contact.url">
            <img
              class="img-fluid social-logo lozad"
              :src="contact.logo"
              :alt="contact.type"
              width="50px"
              height="50px"
            />
            {{ contact.type }}
          </a>
        </p>
      </div>
    </div>
    <div class="hide">
      <p id="contactMessageOk">{{ t('contact.contact-successfull-message') }}</p>
      <p id="contactMessageError">{{ t('contact.form.error_message') }}</p>
    </div>
  </div>
</template>

<style scoped>
#contact {
  padding-top: 8rem !important;
  text-align: center;
}
#contact .sections-title {
  font-size: 4rem;
}
#contact .centered {
  margin: 0 auto;
  display: block;
}
#contact .findme-title {
  font-weight: 900;
  font-size: 2.5rem;
}
#contact .findme-container {
  position: relative;
}
#contact .findme-container .findme-links {
  word-spacing: 2.5rem;
  font-size: 0.9rem;
  display: inline-block;
  width: 140px;
}
#contact .findme-container .findme-links a {
  color: var(--white);
}
#contact .findme-container .findme-links a:hover {
  color: var(--main-color);
}
#contact .findme-container .findme-links .fab {
  width: 50px;
}
#contact input,
textarea {
  padding: 1.5rem !important;
  background-color: var(--input-bg) !important;
  border: 1px solid var(--input-border) !important;
  margin: 0 auto;
  font-size: 0.9rem;
  display: block;
  margin-top: 3rem;
}
@media screen and (max-width: 460px) {
  #contact .findme-container .findme-links {
    width: 100px;
  }
}
</style>
