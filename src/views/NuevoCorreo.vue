<template>

<div class="container">
    
<div class="email-app">
    
    <main>
        <p class="text-center"></p>
        
        <h1 class="h3 mb-3"><strong>Nuevo</strong> Correo</h1>
        <form>
            <div class="form-row mb-3">
                <label for="to" class="col-2 col-sm-1 col-form-label">De:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="to" placeholder="khenriquez@trasporte.gob.hn">
                </div>
            </div>
            <div class="form-row mb-3">
                <label for="cc" class="col-2 col-sm-1 col-form-label">Para:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="cc" placeholder="Type email">
                </div>
            </div>
            <div class="form-row mb-3">
                <label for="bcc" class="col-2 col-sm-1 col-form-label">Asunto:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="bcc" placeholder="Type subject">
                </div>                
            </div>
            <div class="form-row mb-3">
                <label for="bcc" class="col-2 col-sm-1 col-form-label">Adjuntos:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="adjuntos">
                </div>                
            </div>
        </form>
        <div class="row">
            <div class="col-sm-11 ml-auto">
                <div class="toolbar" role="toolbar">
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-bold"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-italic"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-underline"></span>
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-left"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-right"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-center"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-justify"></span>
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-indent"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-outdent"></span>
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-list-ul"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-list-ol"></span>
                        </button>
                    </div>
                    <button type="button" class="btn btn-light">
                        <span class="fa fa-trash-o"></span>
                    </button>
                    <button type="button" class="btn btn-light">
                        <span class="fa fa-paperclip"></span>
                    </button>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                            <span class="fa fa-tags"></span>
                            <span class="caret"></span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">add label <span class="badge badge-danger"> Home</span></a>
                            <a class="dropdown-item" href="#">add label <span class="badge badge-info"> Job</span></a>
                            <a class="dropdown-item" href="#">add label <span class="badge badge-success"> Clients</span></a>
                            <a class="dropdown-item" href="#">add label <span class="badge badge-warning"> News</span></a>
                        </div>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <textarea class="form-control" id="message" name="body" rows="12" placeholder="Click here to reply"> </textarea>
                </div>
                <br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" class="btn btn-outline-success"> <span class="icon is-small">
                  <i class="fas fa-paper-plane"></i>
                  </span>  Enviar</button>
                    <button type="submit" class="btn btn-outline-danger"><span class="icon is-small">
                  <i class="fas fa-ban"></i>
                  </span>  Descartar</button>                   
                   
                </div>
            </div>
        </div>
    </main>
</div>
</div>
</template>

<script>
export default {
     data() {
    return {
      memos: [],
      memo: {},
      editando: null,
      
      
    };
  },

  methods: {
    
    getMemos() {
      fetch("https://localhost:5001/api/memorandum")
        .then((response) => response.json())
        .then((data) => {
          this.memos = data;
        });
    },

     mostrarMemo(memo) {
      this.usuarioEditado = Object.assign({}, memo);
      this.editando = memo.id;
    },

     mostrar(id) {
      this.memo = id;
      console.log(this.memo);
    },

 
  },

  mounted() {
    this.getMemos();
   
  },

}
</script>

