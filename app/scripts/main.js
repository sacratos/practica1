$("#formulario").validate({
     onkeyup: false,
     onfocusout: false,
     onclick: false,
     rules: {
         dpes_02: {
             required: true,
             minlength: 2
         },
         dpes_03: "required",
         dpes_04: "required",
         dpes_05: "required",
         dpes_06: "required",
     }
 });