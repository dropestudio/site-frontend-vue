<script setup lang="ts"></script>
<template>
  <div id="budget_content">
    <div class="messages hide">
      <p id="name" data-i18n="budget.form.submit_error_name"></p>
      <p id="email" data-i18n="budget.form.submit_error_email"></p>
      <p id="success" data-i18n="budget.form.submit_success"></p>

      <dialog id="loading">
        <p class="load text-center"><i class="fa fa-spin fa-spinner fa-5x"></i></p>
      </dialog>
    </div>
    <div class="row">
      <div class="col-lg-12 presentation">
        <p data-i18n="budget.form.title"></p>
        <div id="budget_form" data-action="<?= site_url('orcamento/enviar'); ?>" data-method="post">
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="name"
                data-i18n="budget.form.costumer_detail.name"
                data-i18n-attr="placeholder"
                required
                autocomplete="off"
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control"
                name="email"
                data-i18n="budget.form.costumer_detail.email"
                data-i18n-attr="placeholder"
                required
                autocomplete="off"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="phone"
                class="form-control"
                name="phone"
                data-i18n="budget.form.costumer_detail.whatsapp"
                data-i18n-attr="placeholder"
                autocomplete="off"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="company"
                data-i18n="budget.form.costumer_detail.company_name"
                data-i18n-attr="placeholder"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="city"
                data-i18n="budget.form.costumer_detail.city"
                data-i18n-attr="placeholder"
                autocomplete="off"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="region"
                data-i18n="budget.form.costumer_detail.region"
                data-i18n-attr="placeholder"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="company-site"
                data-i18n="budget.form.costumer_detail.company_site"
                data-i18n-attr="placeholder"
                autocomplete="off"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="company-instagram"
                data-i18n="budget.form.costumer_detail.company_instagram"
                data-i18n-attr="placeholder"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="row">
            <div class="col"><label for="" data-i18n="budget.form.findme.title"></label><br /></div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="how-meet[]"
                    value="google"
                  />
                  <span data-i18n="budget.form.findme.google"></span>
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="how-meet[]"
                    value="instagram"
                  />
                  <span data-i18n="budget.form.findme.instagram"></span>
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="how-meet[]"
                    value="indicacao"
                  />
                  <span data-i18n="budget.form.findme.indication"></span>
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="how-meet[]" value="outro" />
                  <span data-i18n="budget.form.findme.other"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label data-i18n="budget.form.job_wanting.description"></label> <br />
              <textarea class="form-control" name="project-needs" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label data-i18n="budget.form.company_business.title"></label> <br />
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="business-company[]"
                    value="servicos-empresa"
                  />
                  <span data-i18n="budget.form.company_business.business.services"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="business-company[]"
                    value="bares-e-restaurantes"
                  />
                  <span data-i18n="budget.form.company_business.business.restaurant"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="business-company[]"
                    value="linha-de-produtos"
                  />
                  <span data-i18n="budget.form.company_business.business.products"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="business-company[]"
                    value="roupas-e-acessorios"
                  />
                  <span data-i18n="budget.form.company_business.business.clothes"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="business-company[]"
                    value="eletro-eletronicos"
                  />
                  <span data-i18n="budget.form.company_business.business.eletronic"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="business-company[]"
                    value="fotografia"
                  />
                  <span data-i18n="budget.form.company_business.business.photography"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="business-company[]"
                    value="outro"
                  />
                  <span data-i18n="budget.form.company_business.business.other"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label data-i18n="budget.form.company_size.title"></label> <br />
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="company-size"
                    value="profissional-liberal"
                  />
                  <span data-i18n="budget.form.company_size.size.freelancer"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="company-size" value="micro" />
                  <span data-i18n="budget.form.company_size.size.micro"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="company-size"
                    value="pequena"
                  />
                  <span data-i18n="budget.form.company_size.size.small"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="company-size" value="media" />
                  <span data-i18n="budget.form.company_size.size.medium"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="company-size" value="grande" />
                  <span data-i18n="budget.form.company_size.size.big"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label data-i18n="budget.form.visual_identity.title"></label> <br />
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Banner / Capa para facebook"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.banner"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Cartão de visitas"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.card"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Cartão de visitas digital"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.digital_card"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Assinatura de e-mail"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.email_signature"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Adesivo"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.stickers"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Crachá"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.cracha"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Papel timbrado"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.papel_timbrado"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Pasta A4"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.pasta_a4"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Carimbo"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.carimbo"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Template de post para Instagram"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.ig_post"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Brindes"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.brinde"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Uniforme / Avental"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.uniforme"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="visual-identify[]"
                    value="Outro"
                  />
                  <span data-i18n="budget.form.visual_identity.vi.other"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label data-i18n="budget.form.visual_identity.papers.description"></label> <br />
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="paper" value="digital" />
                  <span data-i18n="budget.form.visual_identity.papers.want"></span>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="paper" value="impresso" />
                  <span data-i18n="budget.form.visual_identity.papers.dontwant"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label data-i18n="budget.form.message_extra"></label> <br />
              <textarea class="form-control" name="suggestion" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button
                type="submit"
                name="submit-budget"
                id="submit_budget"
                class="btn drop-button button-blue mt-5 mb-5"
                data-i18n="button.send"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 text-right mb-2 top-buttom">
        <button
          type="button"
          class="btn drop-button button-blue"
          onclick="window.location.href='/'"
          data-i18n="button.return"
        ></button>
      </div>
    </div>
  </div>
</template>
<style scoped>
#budget_content {
  background-color: #131313;
  margin-top: 65px;
  padding-top: 65px;
  padding-right: 10%;
  padding-left: 10%;
}
#budget_content #budget_form .row {
  padding: 10px;
}
@media screen and (max-width: 580px) {
  #budget_content {
    padding-right: 2%;
    padding-left: 2%;
  }
}
</style>
