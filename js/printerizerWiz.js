﻿function PrinterizerWiz() {
    var self = this;
    this.insertLink = true;

    /*count for all form fields*/
    this.cbCount = 0;
    this.tbCount = 0;
    /*end form field counters*/
    $("#inputselector").change(function () {
        if ($("#inputselector").prop("selectedIndex") !== 0) {

            printerized.wizCreator($(this).val());
        }

    });
    $("form").bind('submit', function () {

        return false;
    });

    $("#design").html()
    

}

PrinterizerWiz.prototype = {


    createForm: function () {

        $("#formcreate").addClass("hidden");

        $("#inputCreatorContainer").removeClass("hidden");
        $("#formHeader").text($("#formTitle").val());



    },
    wizCreator: function (wizType) {
        var wizContainer = $(".wizCreatorContainer");

        var wizParent = document.createElement("div");
        var wizHeader = document.createElement("h2");
        
        var wizLabelDiv = document.createElement("div");
        var wizLabel = document.createElement("label");
        var wizLabelDescription = document.createTextNode(wizType+" Label Text");
        var wizInput = document.createElement("input");
        var wizButtonDiv = document.createElement("div");
        var wizButton = document.createElement("button");
        var wizButtontext = document.createTextNode("Create");

        if ($(wizContainer).html().length) {

            $(wizContainer).html("");
        }
        wizButton.type = "button";
        wizInput.type = "text";

        $(wizLabelDiv).addClass("form-group");
        $(wizInput).addClass("form-control");
        $(wizButtonDiv).addClass("button");
        $(wizButton).addClass("btn");
        $(wizButton).addClass("btn-primary");




        switch (wizType) {
            case "checkBox":

                break;
            case "TextBox":
                $(wizButton).click(function () { printerized.textbox($('.wizCreatorContainer input').val()); printerized.wizCreator($("#inputselector").val()); });
                break;
            default:

        }


        $(wizContainer).append(wizParent);
        wizParent.appendChild(wizHeader);
        
        wizParent.appendChild(wizLabelDiv);
        wizLabelDiv.appendChild(wizLabel);
        wizLabel.appendChild(wizLabelDescription);
        wizLabelDiv.appendChild(wizInput);
        wizParent.appendChild(wizButtonDiv);
        wizButtonDiv.appendChild(wizButton);
        wizButton.appendChild(wizButtontext);

        $(wizContainer).slideDown();

    },


    checkbox: function (descriptiontext, checked, optional) {


        var inputdiv = document.createElement("div");
        var label = document.createElement("label");
        var description = document.createTextNode(descriptiontext);
        var checkbox = document.createElement('input');
        $(inputdiv).addClass("checkbox");
        checkbox.type = "checkbox";
        if (checked === true) {
            $(checkbox).attr("checked", true);
        }

        $(checkbox).attr("required", true);
        if (optional === true) {
            $(checkbox).attr("required", false);
        }

        $(checkbox).attr("required");
        checkbox.id = "cb" + this.cbCount;
        inputdiv.appendChild(label);   // add the box to the element
        label.appendChild(checkbox);   // add the box to the element
        label.appendChild(description); // add the description to the element
        console.log(label);
        $("#wizForm").append(inputdiv);
        this.cbCount++
    },


    textbox: function (labeltext, optional) {
        var inputdiv = document.createElement("div"); //create input wrapper element
        var label = document.createElement("label"); //create label element
        var description = document.createTextNode(labeltext); //set description to label equal to whatever paramater is passed
        var textbox = document.createElement('input'); //create textbox element
        $(inputdiv).addClass("form-group"); //set bootstrap class for input wrapper
        $(textbox).addClass("form-control"); //set bootstrap class for textbox
        textbox.type = "text"; //set input type to textbox
        $(textbox).attr("placeholder", labeltext); //set textbox placeholder = label text
        textbox.id = "tb" + this.tbCount; //set textbox id
        $(label).attr("for", textbox.id); //set label for attribute = textbox id
        $(textbox).attr("required", true);
        if (optional === true) {
            $(textbox).attr("required", false);
        }

        inputdiv.appendChild(label);   // add the label to the wrapper
        inputdiv.appendChild(textbox);   // add the textbox to the wrapper
        label.appendChild(description); // add the description to the label
        console.log(label);
        $("#wizForm").append(inputdiv);
        this.tbCount++
    },


    dropdown: function () {
        var label = document.createElement("label");
        var description = document.createTextNode();
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "checkbox" + this.checkboxCount;
        label.appendChild(checkbox);   // add the box to the element
        label.appendChild(description); // add the description to the element
        console.log(label);
        $("#wizForm").append(label);
        this.checkboxCount++
    }

};



var printerized = new PrinterizerWiz();

