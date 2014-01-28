function Printerizer(formid) {
    var self = this;
    this.inputlist = document.getElementsByTagName("input");
    //this.printtype = printtype;
    this.formid = formid;
    this.insertLink = true;
}

Printerizer.prototype = {


    //insert print button on page
    insertLinkifTrue: function () {
        if (this.insertLink === true) {
            ($("#" + this.formid)).prepend($('<button type="button"  class="btn btn-default" onclick="javascript: printerized.printDocument();">Print</button>'));
        }
    },
    init: function () {
        this.insertLinkifTrue();
    },
    printDocument: function () {
        childWindow = window.open('', 'childWindow', 'location=yes, menubar=yes, toolbar=yes');
        childWindow.document.open();
        childWindow.document.writeln("hi");
        childWindow.print();

        childWindow.close();
    },
    getList: function () {
        $("#demoForm").each(function () {
            $(this + " input, " + this + " label").each(function () {
                console.log($this.val())
            });
        });
    }


};



var printerized = new Printerizer('demoForm');
printerized.init()

