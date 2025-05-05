document.addEventListener('DOMContentLoaded', function () {

    const button1 = document.getElementById("button-1");
    const button2 = document.getElementById("button-2");
    const button3 = document.getElementById("button-3");
    const button4 = document.getElementById("button-4");
    const button1a = document.getElementById("button-1a");
    const button2a = document.getElementById("button-2a");
    const button3a = document.getElementById("button-3a");
    const button4a = document.getElementById("button-4a");
    const button5 = document.getElementById("button-5");
    const button6 = document.getElementById("button-6");
    const button7 = document.getElementById("button-7");
    const button8 = document.getElementById("button-8");
    const button9 = document.getElementById("button-9");
    const button10 = document.getElementById("button-10");
    const button11 = document.getElementById("button-11");
    const button12 = document.getElementById("button-12");
    const button13 = document.getElementById("button-13");
    const button14 = document.getElementById("button-14");
    const button15 = document.getElementById("button-15");
    const button16 = document.getElementById("button-16");
    const button17 = document.getElementById("button-17");
    const button18 = document.getElementById("button-18");

    const form_input = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.querySelector(".form3");
    const form4 = document.querySelector(".form4");
    const form1a = document.getElementById('form1a');
    const form2a = document.getElementById('form2a');
    const form3a = document.querySelector(".form3a");
    const form4a = document.querySelector(".form4a");
    const form5 = document.querySelector(".form5");
    const form6 = document.querySelector(".form6");
    const form7 = document.querySelector(".form7");
    const form8 = document.querySelector(".form8");
    const form9 = document.querySelector(".form9");
    const form10 = document.querySelector(".form10");
    const form11 = document.querySelector(".form11");
    const form12 = document.querySelector(".form12");
    const form13 = document.querySelector(".form13");
    const form14 = document.querySelector(".form14");
    const form15 = document.querySelector(".form15");
    const form16 = document.querySelector(".form16");
    const form17 = document.querySelector(".form17");
    const form18 = document.querySelector(".form18");

    button1.classList.add("buttonClick");
    button1a.classList.add("buttonClick");
    button6.classList.add("buttonClick");
    button10.classList.add("buttonClick");
    button14.classList.add("buttonClick");
    button17.classList.add("buttonClick");

    button1.addEventListener('click', function () {
        form_input.style.display = "block";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        form5.style.display = "none";
        button1.classList.add("buttonClick");
        button2.classList.remove("buttonClick");
        button3.classList.remove("buttonClick");
        button4.classList.remove("buttonClick");
        button5.classList.remove("buttonClick");
    })
    button1a.addEventListener('click', function () {
        form1a.style.display = "block";
        form2a.style.display = "none";
        form3a.style.display = "none";
        form4a.style.display = "none";
        button1a.classList.add("buttonClick");
        button2a.classList.remove("buttonClick");
        button3a.classList.remove("buttonClick");
        button4a.classList.remove("buttonClick");
    })
    button2a.addEventListener('click', function () {
        form1a.style.display = "none";
        form2a.style.display = "block";
        form3a.style.display = "none";
        form4a.style.display = "none";
        button1a.classList.remove("buttonClick");
        button2a.classList.add("buttonClick");
        button3a.classList.remove("buttonClick");
        button4a.classList.remove("buttonClick");
    })
    button3a.addEventListener('click', function () {
        form1a.style.display = "none";
        form2a.style.display = "none";
        form3a.style.display = "block";
        form4a.style.display = "none";
        button1a.classList.remove("buttonClick");
        button2a.classList.remove("buttonClick");
        button3a.classList.add("buttonClick");
        button4a.classList.remove("buttonClick");
    })
    button4a.addEventListener('click', function () {
        form1a.style.display = "none";
        form2a.style.display = "none";
        form3a.style.display = "none";
        form4a.style.display = "block";
        button1a.classList.remove("buttonClick");
        button2a.classList.remove("buttonClick");
        button3a.classList.remove("buttonClick");
        button4a.classList.add("buttonClick");
    })
    button2.addEventListener('click', function () {
        form2.style.display = "block";
        form_input.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        form5.style.display = "none";
        button2.classList.add("buttonClick");
        button1.classList.remove("buttonClick");
        button3.classList.remove("buttonClick");
        button4.classList.remove("buttonClick");
        button5.classList.remove("buttonClick");
    })
    button3.addEventListener('click', function () {
        form3.style.display = "block";
        form_input.style.display = "none";
        form2.style.display = "none";
        form4.style.display = "none";
        form5.style.display = "none";
        button3.classList.add("buttonClick");
        button1.classList.remove("buttonClick");
        button2.classList.remove("buttonClick");
        button4.classList.remove("buttonClick");
        button5.classList.remove("buttonClick");
    });
    button4.addEventListener('click', function () {
        form4.style.display = "block";
        form3.style.display = "none";
        form_input.style.display = "none";
        form2.style.display = "none";
        form5.style.display = "none";
        button4.classList.add("buttonClick");
        button3.classList.remove("buttonClick");
        button1.classList.remove("buttonClick");
        button2.classList.remove("buttonClick");
        button5.classList.remove("buttonClick");
    });
    button5.addEventListener('click', function () {
        form5.style.display = "block";
        form4.style.display = "none";
        form3.style.display = "none";
        form_input.style.display = "none";
        form2.style.display = "none";
        button5.classList.add("buttonClick");
        button4.classList.remove("buttonClick");
        button3.classList.remove("buttonClick");
        button1.classList.remove("buttonClick");
        button2.classList.remove("buttonClick");
    });
    button6.addEventListener('click', function () {
        form6.style.display = "block";
        form7.style.display = "none";
        form8.style.display = "none";
        form9.style.display = "none";
        button6.classList.add("buttonClick");
        button7.classList.remove("buttonClick");
        button8.classList.remove("buttonClick");
        button9.classList.remove("buttonClick");
    })
    button7.addEventListener('click', function () {
        form7.style.display = "block";
        form6.style.display = "none";
        form8.style.display = "none";
        form9.style.display = "none";
        button7.classList.add("buttonClick");
        button6.classList.remove("buttonClick");
        button8.classList.remove("buttonClick");
        button9.classList.remove("buttonClick");
    })
    button8.addEventListener('click', function () {
        form8.style.display = "block";
        form6.style.display = "none";
        form7.style.display = "none";
        form9.style.display = "none";
        button8.classList.add("buttonClick");
        button6.classList.remove("buttonClick");
        button7.classList.remove("buttonClick");
        button9.classList.remove("buttonClick");
    })
    button9.addEventListener('click', function () {
        form9.style.display = "block";
        form6.style.display = "none";
        form8.style.display = "none";
        form7.style.display = "none";
        button9.classList.add("buttonClick");
        button6.classList.remove("buttonClick");
        button8.classList.remove("buttonClick");
        button7.classList.remove("buttonClick");
    })
    button10.addEventListener('click', function () {
        form10.style.display = "block";
        form11.style.display = "none";
        form12.style.display = "none";
        form13.style.display = "none";
        button10.classList.add("buttonClick");
        button11.classList.remove("buttonClick");
        button12.classList.remove("buttonClick");
        button13.classList.remove("buttonClick");
    })

    button11.addEventListener('click', function () {
        form11.style.display = "block";
        form10.style.display = "none";
        form12.style.display = "none";
        form13.style.display = "none";
        button11.classList.add("buttonClick");
        button10.classList.remove("buttonClick");
        button12.classList.remove("buttonClick");
        button13.classList.remove("buttonClick");
    })
    button12.addEventListener('click', function () {
        form12.style.display = "block";
        form10.style.display = "none";
        form11.style.display = "none";
        form13.style.display = "none";
        button12.classList.add("buttonClick");
        button10.classList.remove("buttonClick");
        button11.classList.remove("buttonClick");
        button13.classList.remove("buttonClick");
    })
    button13.addEventListener('click', function () {
        form13.style.display = "block";
        form10.style.display = "none";
        form11.style.display = "none";
        form12.style.display = "none";
        button13.classList.add("buttonClick");
        button10.classList.remove("buttonClick");
        button11.classList.remove("buttonClick");
        button12.classList.remove("buttonClick");
    })
    button14.addEventListener('click', function () {
        form14.style.display = "block";
        form15.style.display = "none";
        form16.style.display = "none";
        button14.classList.add("buttonClick");
        button15.classList.remove("buttonClick");
        button16.classList.remove("buttonClick");
    })
    button15.addEventListener('click', function () {
        form15.style.display = "block";
        form14.style.display = "none";
        form16.style.display = "none";
        button15.classList.add("buttonClick");
        button14.classList.remove("buttonClick");
        button16.classList.remove("buttonClick");
    })
    button16.addEventListener('click', function () {
        form16.style.display = "block";
        form15.style.display = "none";
        form14.style.display = "none";
        button16.classList.add("buttonClick");
        button15.classList.remove("buttonClick");
        button14.classList.remove("buttonClick");
    })
    button17.addEventListener('click', function () {
        form17.style.display = "block";
        form18.style.display = "none";
        button17.classList.add("buttonClick");
        button18.classList.remove("buttonClick");
    })
    button18.addEventListener('click', function () {
        form18.style.display = "block";
        form17.style.display = "none";
        button18.classList.add("buttonClick");
        button17.classList.remove("buttonClick");
    })

    const dropdowns = document.getElementById("dropdowns");
    const dropdowns2 = document.getElementById("dropdowns2");
    const dropdowns3 = document.getElementById("dropdowns3");
    const dropdowns4 = document.getElementById("dropdowns4");
    const dropdowns5 = document.getElementById("dropdowns5");
    const dropdowns6 = document.getElementById("dropdowns6");
    const dropdowns7 = document.getElementById("dropdowns7");
    const dropdowns8 = document.getElementById("dropdowns8");
    const key_arrow_down = document.getElementById("arrow_down");
    const key_arrow_down2 = document.getElementById("arrow_down2");
    const key_arrow_down3 = document.getElementById("arrow_down3");
    const key_arrow_down4 = document.getElementById("arrow_down4");
    const key_arrow_down5 = document.getElementById("arrow_down5");
    const key_arrow_down6 = document.getElementById("arrow_down6");
    const key_arrow_down7 = document.getElementById("arrow_down7");
    const key_arrow_down8 = document.getElementById("arrow_down8");
    const dropdownItems = document.getElementsByClassName("dropdown");
    const dropdownItems2 = document.getElementsByClassName("dropdown2");
    const dropdownItems3 = document.getElementsByClassName("dropdown3");
    const dropdownItems4 = document.getElementsByClassName("dropdown4");
    const dropdownItems5 = document.getElementsByClassName("dropdown5");
    const dropdownItems6 = document.getElementsByClassName("dropdown6");
    const dropdownItems7 = document.getElementsByClassName("dropdown7");
    const dropdownItems8 = document.getElementsByClassName("dropdown8");
    const countryName = document.getElementsByClassName("countryName");
    const logos = document.getElementsByClassName("logos");
    const passportForm = document.getElementById("section1");
    const driverLicenseForm = document.getElementById("section1b");
    const IdForm = document.getElementById("section1c");
    const BillsandStatements = document.getElementById("section1d");
    const USA = document.getElementById("section1e");

    const nav = document.getElementsByClassName("nav")[0];
    const generatesbutton = document.getElementById("allGeneratesSec");
    const section0 = document.getElementById("section0");
    const firstCategoryElement = document.querySelector('.category:nth-child(1)');
    const secondCategoryElement = document.querySelector('.category:nth-child(2)');
    const thirdCategoryElement = document.querySelector('.category:nth-child(3)');
    const fourthCategoryElement = document.querySelector('.category:nth-child(4)');
    const fifthCategoryElement = document.querySelector('.category:nth-child(5)');
    const sixthCategoryElement = document.querySelector('.category:nth-child(6)');
    const seventhCategoryElement = document.querySelector('.category:nth-child(7)');
    const eighthCategoryElement = document.querySelector('.category:nth-child(8)');

    // function dropitems() {
    //     dropitemclick(dropdownItems, dropdowns, 0);
    //     dropitemclick(dropdownItems2, dropdowns2, 1);
    //     dropitemclick(dropdownItems3, dropdowns3, 2);
    //     dropitemclick(dropdownItems4, dropdowns4, 3);
    //     dropitemclick(dropdownItems5, dropdowns5, 4);
    //     dropitemclick(dropdownItems6, dropdowns6, 5);
    //     dropitemclick(dropdownItems7, dropdowns7, 6);
    //     dropitemclick(dropdownItems8, dropdowns8, 7);
    // }
    const handledropClick1 = function () {
        dropitemclick(dropdownItems, dropdowns, 0);
        passportForm.style.display = "block";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "none";
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
    }
    const handledropClick2 = function () {
        dropitemclick(dropdownItems2, dropdowns2, 1);
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "block";
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
    }
    const handledropClick3 = function () {
        dropitemclick(dropdownItems3, dropdowns3, 2);
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "none";
        IdForm.style.display = "block";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
    }
    const handledropClick4 = function () {
        dropitemclick(dropdownItems4, dropdowns4, 3);
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "block";
        USA.style.display = "none";
    }
    const handledropClick5 = function () {
        dropitemclick(dropdownItems5, dropdowns5, 4);
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "block";
    }
    const handledropClick6 = function () {
        dropitemclick(dropdownItems6, dropdowns6, 5);
        passportForm.style.display = "block";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
    }
    const handledropClick7 = function () {
        dropitemclick(dropdownItems7, dropdowns7, 6);
        passportForm.style.display = "block";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
    }
    const handledropClick8 = function () {
        dropitemclick(dropdownItems8, dropdowns8, 7);
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "block";
    }
    const handleClick1 = function () {
        toggleDropdown(firstCategoryElement, 0, dropdowns, dropdownItems);
    };
    const handleClick2 = function () {
        toggleDropdown(secondCategoryElement, 1, dropdowns2, dropdownItems2);
    };
    const handleClick3 = function () {
        toggleDropdown(thirdCategoryElement, 2, dropdowns3, dropdownItems3);
    };
    const handleClick4 = function () {
        toggleDropdown(fourthCategoryElement, 3, dropdowns4, dropdownItems4);
    };
    const handleClick5 = function () {
        toggleDropdown(fifthCategoryElement, 4, dropdowns5, dropdownItems5);
    };
    const handleClick6 = function () {
        toggleDropdown(sixthCategoryElement, 5, dropdowns6, dropdownItems6);
    };
    const handleClick7 = function () {
        toggleDropdown(seventhCategoryElement, 6, dropdowns7, dropdownItems7);
    };
    const handleClick8 = function () {
        toggleDropdown(eighthCategoryElement, 7, dropdowns8, dropdownItems8);
    };

    function toggleDropdown(categoryElement, index, dropdown, dropdownitems) {
        if (!countryName[index].classList.contains("clicked")) {
            countryName[index].classList.add("clicked");
            logos[index].classList.add("clicked");
            categoryElement.parentNode.insertBefore(dropdown, categoryElement.nextSibling);
            dropdown.style.display = "block";
            passFlagclicked();
            DLFlagclicked();
            IDFlagclicked();
            BillFlagClicked();
            USAFlagClicked();
            OthersClicked();
            for (let i = 0; i < dropdownitems.length; i++) {
                dropdownitems[i].style.display = "flex";
            }
            // for (let i = 0; i < length.clicked; i++) {
            //     if (i !== index && countryName[i].classList.contains("clicked")) {
            //         countryName[index].classList.remove("clicked");
            //         logos[index].classList.remove("clicked");
            //         dropdown.parentNode.removeChild(dropdown);
            //         dropdown = null;
            //         for (let i = 0; i < dropdownitems.length; i++) {
            //             dropdownitems[i].style.display = "none";
            //         }
            //     }
            // }
        }
        else if (countryName[index].classList.contains("clicked")) {
            passFlagclicked();
            DLFlagclicked();
            IDFlagclicked();
            BillFlagClicked();
            USAFlagClicked();
            OthersClicked();
            countryName[index].classList.remove("clicked");
            logos[index].classList.remove("clicked");
            dropdown.parentNode.removeChild(dropdown);
            dropdown = null;
            for (let i = 0; i < dropdownitems.length; i++) {
                dropdownitems[i].style.display = "none";
            }
        }
    }
    function dropitemclick(dropdownitems, dropdown, index) {
        passFlagclicked();
        DLFlagclicked();
        IDFlagclicked();
        BillFlagClicked();
        USAFlagClicked();
        OthersClicked();
        countryName[index].classList.remove("clicked");
        logos[index].classList.remove("clicked");
        dropdown.parentNode.removeChild(dropdown);
        dropdown = null;
        for (let j = 0; j < dropdownitems.length; j++) {
            dropdownitems[j].style.display = "none";
        }
    }
    function handleWindowResize() {
        if (window.innerWidth > 1100) {
            setupLargeScreen();
        } else {
            setupSmallScreen();
        }
    }

    const errorElement = document.getElementsByClassName("errorElement");
    const errorElement2 = document.getElementsByClassName("errorElement2");
    const passportname = document.getElementById("passportname");
    const passprice = document.getElementById("passprice");
    const passportname2 = document.getElementById("passportname2");
    const passprice2 = document.getElementById("passprice2");
    const PassBirthDate = document.getElementById("PassBirthDate");
    const PassIssueDate = document.getElementById("PassIssueDate");
    const PassExpiryDate = document.getElementById("PassExpiryDate");
    const PassBirthDateLabel = document.getElementById("PassBirthDateLabel");
    const PassIssueDateLabel = document.getElementById("PassIssueDateLabel");
    const PassExpiryDateLabel = document.getElementById("PassExpiryDateLabel");
    const PassBirthDateLabel2 = document.getElementById("PassBirthDateLabel2");
    const PassIssueDateLabel2 = document.getElementById("PassIssueDateLabel2");
    const PassExpiryDateLabel2 = document.getElementById("PassExpiryDateLabel2");
    const PassBirthDate2 = document.getElementById("PassBirthDate2");
    const PassIssueDate2 = document.getElementById("PassIssueDate2");
    const PassExpiryDate2 = document.getElementById("PassExpiryDate2");
    const passSurnameLabel = document.getElementById("passSurnameLabel");
    const passSurname = document.getElementById("DOE");
    const passSurnameLabel2 = document.getElementById("passSurnameLabel2");
    const passSurname2 = document.getElementById("DOE2");
    const passGivenameLabel = document.getElementById("passGivenameLabel");
    const passGivename = document.getElementById("JOHN");
    const passGivenameLabel2 = document.getElementById("passGivenameLabel2");
    const passGivename2 = document.getElementById("JOHN2");
    const passDocLabel = document.getElementById("passDocLabel");
    const passDoc = document.getElementById("AP1234567");
    const passDocLabel2 = document.getElementById("passDocLabel2");
    const passDoc2 = document.getElementById("2AP1234567");
    const passSexLabel = document.getElementById("passSexLabel");
    const passSex = document.getElementById("passSex");
    const passSexDiv = document.getElementById("passSexDiv");
    const passSexLabelb = document.getElementById("passSexLabelb");
    const passSexb = document.getElementById("passSexb");
    const passSexDivb = document.getElementById("passSexDivb");
    const passSexLabel2 = document.getElementById("passSexLabel2");
    const passSex2 = document.getElementById("passSex2");
    const passSexDiv2 = document.getElementById("passSexDiv2");
    const passPlaceofbirth = document.getElementById("ROA");
    const authority = document.getElementById("017");
    const passPlaceofbirth2 = document.getElementById("ROA2");
    const authority2 = document.getElementById("0172");
    const surnameLabel = document.getElementById("surName");
    const givenNameLabel = document.getElementById("givenName");
    const nationalityLabel = document.getElementById("Nationality");
    const PlaceofbirthLabel = document.getElementById("placeOfBirth");
    const surname = document.getElementById("surname");
    const givenNames = document.getElementById("givenNames");
    const nationality = document.getElementById("nationality");
    const placeofbirth = document.getElementById("placeofbirth");
    const sex = document.getElementById("sex");
    const SexLabel = document.getElementById("Sex");
    const SexLabel2 = document.getElementById("sexLabel2");
    const sex2 = document.getElementById("sexinput");
    const optionalLabel = document.getElementById("OptionalLabel2");
    const optional = document.getElementById("optional");
    const placeDiv = document.getElementById("placediv");
    const sexDiv = document.getElementById("sexdiv");
    const givenNameDiv = document.getElementById("givenNamediv");
    const authorityDiv = document.getElementById("authorityDiv");
    const nationalityDiv = document.getElementById("nationalitydiv");
    const authorityDiv2 = document.getElementById("authorityDiv2");
    const personalNoDiv2 = document.getElementById("personalNoDiv2");
    const sexDiv2 = document.getElementById("sexDiv2")
    const placeofbirthDiv2 = document.getElementById("placeofbirthDiv2");
    const optionalDiv2 = document.getElementById("optionalDiv2");
    const expiryDiv = document.getElementById("expiryDiv");
    const expiryDiv2 = document.getElementById("expiryDiv2");
    const authorityLabel = document.getElementById("authorityLabel");
    const placeofbirthLabel = document.getElementById("placeofbirthLabel");
    const authorityLabel2 = document.getElementById("authorityLabel2");
    const personalNoLabel2 = document.getElementById("personalNoLabel2");
    const personalNo = document.getElementById("85716545A");
    const extraDiv = document.getElementById("extraDiv");
    const extra = document.getElementById("extra");
    const extraLabel = document.getElementById("extraLabel");
    const extraDiv2 = document.getElementById("extraDiv2");
    const extra2 = document.getElementById("extra2");
    const extraLabel2 = document.getElementById("extraLabel2");
    const armenia = document.getElementById("armenia");
    const australia = document.getElementById("australia");
    const austria = document.getElementById("austria");
    const bangladesh = document.getElementById("bangladesh");
    const belarus = document.getElementById("belarus");
    const brazil = document.getElementById("brazil");
    const bulgaria = document.getElementById("bulgaria");
    const cameroon = document.getElementById("cameroon");
    const canada = document.getElementById("canada");
    const china = document.getElementById("china");
    const croatia = document.getElementById("croatia");
    const czech = document.getElementById("czech");
    const denmark = document.getElementById("denmark");
    const dominicana = document.getElementById("dominicana");
    const estonia = document.getElementById("estonia");
    const finland = document.getElementById("finland");
    const france = document.getElementById("france");
    const germany = document.getElementById("germany");
    const hungary = document.getElementById("hungary");
    const hongkong = document.getElementById("hongkong");
    const india = document.getElementById("india");
    const indonesia = document.getElementById("indonesia");
    const ireland = document.getElementById("ireland");
    const italy = document.getElementById("italy");
    const kazakhstan = document.getElementById("kazakhstan");
    const kenya = document.getElementById("kenya");
    const latvia = document.getElementById("latvia");
    const lietuva = document.getElementById("lietuva");
    const malaysia = document.getElementById("malaysia");
    const mexico = document.getElementById("mexico");
    const netherlands = document.getElementById("netherlands");
    const newzealand = document.getElementById("newzealand");
    const norway = document.getElementById("norway");
    const peru = document.getElementById("peru");
    const poland = document.getElementById("poland");
    const russia = document.getElementById("russia");
    const serbia = document.getElementById("serbia");
    const singapore = document.getElementById("singapore");
    const slovenia = document.getElementById("slovenia");
    const southafrica = document.getElementById("southafrica");
    const spain = document.getElementById("spain");
    const sweden = document.getElementById("sweden");
    const switzerland = document.getElementById("switzerland");
    const turkey = document.getElementById("turkey");
    const uae = document.getElementById("uae");
    const uk = document.getElementById("uk");
    const ukraine = document.getElementById("ukraine");
    const usa = document.getElementById("usa");
    const venezuela = document.getElementById("venezeula");
    const vietnam = document.getElementById("vietnam");

    const armeniapassCIS = document.getElementById("armeniapassCIS");
    const belaruspassCIS = document.getElementById("belaruspassCIS");
    const russiapassCIS = document.getElementById("russiapassCIS");
    const kazapassCIS = document.getElementById("kazapassCIS");
    const ukrainepassCIS = document.getElementById("ukrainepassCIS");
    const russiaF = document.getElementById("russiaF");
    const usaPass = document.getElementById("usaPass");

    const secondpassSection = document.getElementById("section1-i");
    function display0() {
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        driverLicenseForm.style.display = "none";
        passportForm.style.display = "block";
        secondpassSection.style.display = "none";
        passprice.textContent = "$ 8.99";
        nationalityDiv.style.display = "block";
        passSexDiv.style.display = "block";
        authorityDiv.style.display = "block";
        placeDiv.style.display = "block";
        sexDiv.style.display = "block";
        expiryDiv.style.display = "block";
        givenNameDiv.style.display = "block";
        extraDiv.style.display = "none";
        extraDiv2.style.display = "none";
        passSurnameLabel.textContent = "Surname";
        passGivenameLabel.textContent = "Given names";
        passSurname.placeholder = "DOE";
        passGivename.placeholder = "JOHN";
        passDoc.placeholder = "AP1234567";
        passDocLabel.textContent = "Document Number (9 characters)";
        passSexDivb.style.display = "block";
        placeofbirthLabel.textContent = "Place of birth";
        authorityLabel.textContent = "Authority";
        passSex.placeholder = "M";
        passSexLabel.textContent = "Sex (M or F)";
        extraLabel.textContent = "Surname (line2) - optional";
        extra.placeholder = "LEE";
        PassBirthDateLabel.textContent = "Date of birth (DD.MM.YYYY)";
        PassBirthDate.placeholder = "16.10.1986";
        PassBirthDate.value = "";
        PassIssueDateLabel.textContent = "Date of issue (DD.MM.YYYY)";
        PassIssueDate.placeholder = "15.12.2017";
        PassIssueDate.value = "";
        PassExpiryDateLabel.textContent = "Date of expiry (DD.MM.YYYY)";
        PassExpiryDate.placeholder = "15.12.2027";
        PassExpiryDate.value = "";
        extra.removeAttribute("required");
        passDoc.setAttribute('required', 'required');
        placeofbirth.setAttribute('required', 'required');
        sex.setAttribute('required', 'required');
        givenNames.setAttribute('required', 'required');
        authority.setAttribute('required', 'required');
        passPlaceofbirth.value = "";
        authority.value = "";
        surname.value = "";
        givenNames.value = "";
        nationality.value = "";
        placeofbirth.value = "";
    }
    function display() {
        passprice2.textContent = "$ 8.99";
        secondpassSection.style.display = "block";
        passportForm.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        passSexDiv2.style.display = "block";
        authorityDiv2.style.display = "block";
        personalNoDiv2.style.display = "block";
        sexDiv2.style.display = "block";
        expiryDiv2.style.display = "block";
        placeofbirthDiv2.style.display = "block";
        passDoc2.placeholder = "PE1234567";
        sex2.value = "";
        sex2.placeholder = "M";
        SexLabel2.textContent = "Sex (M or F)";
        authorityLabel2.textContent = "Authority";
        passDocLabel2.textContent = "Document Number (9 characters)";
        optionalDiv2.style.display = "none";
        passSurnameLabel2.textContent = "Surname";
        passGivenameLabel2.textContent = "Given names";
        passSexLabel2.textContent = "Sex (M or F)";
        passSurname2.placeholder = "DOE";
        passGivename2.placeholder = "JOHN";
        passSex2.placeholder = "M";
        personalNoLabel2.textContent = "Personal Number (9 characters)";
        personalNo.placeholder = "85716545A";
        PassBirthDateLabel2.textContent = "Date of birth (DD.MM.YYYY)";
        PassBirthDate2.placeholder = "16.10.1986";
        PassBirthDate2.value = "";
        PassIssueDateLabel2.textContent = "Date of issue (DD.MM.YYYY)";
        PassIssueDate2.placeholder = "15.12.2017";
        PassIssueDate2.value = "";
        PassExpiryDateLabel2.textContent = "Date of expiry (DD.MM.YYYY)";
        PassExpiryDate2.placeholder = "15.12.2027";
        PassExpiryDate2.value = "";
        passSurname2.setAttribute('required', 'required');
        personalNo.setAttribute('required', 'required');
        passGivename2.setAttribute('required', 'required');
        passDoc2.setAttribute('required', 'required');
        sex2.setAttribute('required', 'required');
        optional.setAttribute('required', 'required');
        authority2.setAttribute('required', 'required');
        passPlaceofbirth2.setAttribute('required', 'required');
        optional.placeholder = "DVR 1234567";
        optionalLabel.textContent = "Optional Data";
    }
    function CheckDate(dateString, regex) {
        if (!regex.test(dateString)) {
            return false;
        }
        return true;
    }
    //dd.mm.yyyy
    function CheckDatePass(dateString) {
        var regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/;
        return CheckDate(dateString, regex);
    }
    //dd-mm-yyyy
    function CheckDateDash(dateString) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }
    //yyyy-mm-dd
    function CheckDateDash2(dateString) {
        const regex = /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        return CheckDate(dateString, regex);
    }

    function validateInput(input, errorElement, func) {
        if (input.value.trim() === '') {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please fill out this field';
            return false;
        } else if (!func(input.value)) {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please match the requested format';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    }
    function inputListenerPass1() {
        validateInput(this, errorElement[0], CheckDatePass);
    }

    function inputListenerPass2() {
        validateInput(this, errorElement[1], CheckDatePass);
    }

    function inputListenerPass3() {
        validateInput(this, errorElement[2], CheckDatePass);
    }

    function submitListener(event) {
        if (!validateInput(PassBirthDate, errorElement[0], CheckDatePass) ||
            !validateInput(PassIssueDate, errorElement[1], CheckDatePass) ||
            !validateInput(PassExpiryDate, errorElement[2], CheckDatePass)) {
            event.preventDefault();
        }
    }

    function CheckPassDateFormats() {
        PassBirthDate.addEventListener('input', inputListenerPass1);
        PassIssueDate.addEventListener('input', inputListenerPass2);
        PassExpiryDate.addEventListener('input', inputListenerPass3);
        form4.addEventListener('submit', submitListener);
    }

    function CheckPassDateFormatsRemove() {
        PassBirthDate.removeEventListener('input', inputListenerPass1);
        PassIssueDate.removeEventListener('input', inputListenerPass2);
        PassExpiryDate.removeEventListener('input', inputListenerPass3);
        form4.removeEventListener('submit', submitListener);
        errorElement[0].textContent = "";
        errorElement[1].textContent = "";
        errorElement[2].textContent = "";
    }
    function inputListener1b() {
        validateInput(this, errorElement2[0], CheckDatePass);
    }

    function inputListener2b() {
        validateInput(this, errorElement2[1], CheckDatePass);
    }

    function inputListener3b() {
        validateInput(this, errorElement2[2], CheckDatePass);
    }

    function submitListener(event) {
        if (!validateInput(PassBirthDate2, errorElement2[0], CheckDatePass) ||
            !validateInput(PassIssueDate2, errorElement2[1], CheckDatePass) ||
            !validateInput(PassExpiryDate2, errorElement2[2], CheckDatePass)) {
            event.preventDefault();
        }
    }

    function CheckPassDateFormats2() {
        PassBirthDate2.addEventListener('input', inputListener1b);
        PassIssueDate2.addEventListener('input', inputListener2b);
        PassExpiryDate2.addEventListener('input', inputListener3b);
        form4a.addEventListener('submit', submitListener);
    }

    function CheckPassDateFormats2Remove() {
        PassBirthDate2.removeEventListener('input', inputListener1b);
        PassIssueDate2.removeEventListener('input', inputListener2b);
        PassExpiryDate2.removeEventListener('input', inputListener3b);
        form4a.removeEventListener('submit', submitListener);
        errorElement2[0].textContent = "";
        errorElement2[1].textContent = "";
        errorElement2[2].textContent = "";
    }
    function inputListenerDash1() {
        validateInput(this, errorElement[0], CheckDateDash);
    }

    function inputListenerDash2() {
        validateInput(this, errorElement[1], CheckDateDash);
    }

    function inputListenerDash3() {
        validateInput(this, errorElement[2], CheckDateDash);
    }

    function submitListener(event) {
        if (!validateInput(PassBirthDate, errorElement[0], CheckDateDash) ||
            !validateInput(PassIssueDate, errorElement[1], CheckDateDash) ||
            !validateInput(PassExpiryDate, errorElement[2], CheckDateDash)) {
            event.preventDefault();
        }
    }

    function CheckDateFormatsDash() {
        PassBirthDate.addEventListener('input', inputListenerDash1);
        PassIssueDate.addEventListener('input', inputListenerDash2);
        PassExpiryDate.addEventListener('input', inputListenerDash3);
        form4.addEventListener('submit', submitListener);

    }

    function CheckDateFormatsDashRemove() {
        PassBirthDate.removeEventListener('input', inputListenerDash1);
        PassIssueDate.removeEventListener('input', inputListenerDash2);
        PassExpiryDate.removeEventListener('input', inputListenerDash3);
        form4.removeEventListener('submit', submitListener);
        errorElement[0].textContent = "";
        errorElement[1].textContent = "";
        errorElement[2].textContent = "";
    }

    function inputListenerDash1b() {
        validateInput(this, errorElement2[0], CheckDateDash);
    }

    function inputListenerDash2b() {
        validateInput(this, errorElement2[1], CheckDateDash);
    }

    function inputListenerDash3b() {
        validateInput(this, errorElement2[2], CheckDateDash);
    }

    function submitListener(event) {
        if (!validateInput(PassBirthDate2, errorElement2[0], CheckDateDash) ||
            !validateInput(PassIssueDate2, errorElement2[1], CheckDateDash) ||
            !validateInput(PassExpiryDate2, errorElement2[2], CheckDateDash)) {
            event.preventDefault();
        }
    }

    function CheckDateFormatsDashb() {
        PassBirthDate2.addEventListener('input', inputListenerDash1b);
        PassIssueDate2.addEventListener('input', inputListenerDash2b);
        PassExpiryDate2.addEventListener('input', inputListenerDash3b);
        form4.addEventListener('submit', submitListener);

    }

    function CheckDateFormatsDashbRemove() {
        PassBirthDate2.removeEventListener('input', inputListenerDash1b);
        PassIssueDate2.removeEventListener('input', inputListenerDash2b);
        PassExpiryDate2.removeEventListener('input', inputListenerDash3b);
        form4.removeEventListener('submit', submitListener);
        errorElement2[0].textContent = "";
        errorElement2[1].textContent = "";
        errorElement2[2].textContent = "";
    }


    function inputListenerDashI() {
        validateInput(this, errorElement2[0], CheckDateDash2);
    }

    function inputListenerDashII() {
        validateInput(this, errorElement2[1], CheckDateDash2);
    }

    function inputListenerDashIII() {
        validateInput(this, errorElement2[2], CheckDateDash2);
    }

    function inputListenerDashIV() {
        validateInput(this, errorElement2[3], CheckDateDash2);
    }

    function submitListener(event) {
        if (!validateInput(PassBirthDate, errorElement[0], CheckDateDash2) ||
            !validateInput(PassIssueDate, errorElement[1], CheckDateDash2) ||
            !validateInput(PassExpiryDate, errorElement[2], CheckDateDash2) ||
            !validateInput(sex2, errorElement2[3], CheckDateDash2)) {
            event.preventDefault();
        }
    }

    function CheckDateFormatsDash2() {
        PassBirthDate.addEventListener('input', inputListenerDashI);
        PassIssueDate.addEventListener('input', inputListenerDashII);
        PassExpiryDate.addEventListener('input', inputListenerDashIII);
        sex2.addEventListener('input', inputListenerDashIV);
        form4a.addEventListener('submit', submitListener);
    }

    function CheckDateFormatsDash2Remove() {
        PassBirthDate.removeEventListener('input', inputListenerDashI);
        PassIssueDate.removeEventListener('input', inputListenerDashII);
        PassExpiryDate.removeEventListener('input', inputListenerDashIII);
        sex2.removeEventListener('input', inputListenerDashIV);
        form4a.removeEventListener('submit', submitListener);
        errorElement[0].textContent = "";
        errorElement[1].textContent = "";
        errorElement[2].textContent = "";
    }
    function inputListenerDashIb() {
        validateInput(this, errorElement2[0], CheckDateDash2);
    }

    function inputListenerDashIIb() {
        validateInput(this, errorElement2[1], CheckDateDash2);
    }

    function inputListenerDashIIIb() {
        validateInput(this, errorElement2[2], CheckDateDash2);
    }

    function inputListenerDashIVb() {
        validateInput(this, errorElement2[3], CheckDateDash2);
    }

    function submitListener(event) {
        if (!validateInput(PassBirthDate2, errorElement2[0], CheckDateDash2) ||
            !validateInput(PassIssueDate2, errorElement2[1], CheckDateDash2) ||
            !validateInput(PassExpiryDate2, errorElement2[2], CheckDateDash2) ||
            !validateInput(sex2, errorElement2[3], CheckDateDash2)) {
            event.preventDefault();
        }
    }

    function CheckDateFormatsDash2b() {
        PassBirthDate2.addEventListener('input', inputListenerDashIb);
        PassIssueDate2.addEventListener('input', inputListenerDashIIb);
        PassExpiryDate2.addEventListener('input', inputListenerDashIIIb);
        sex2.addEventListener('input', inputListenerDashIVb);
        form4a.addEventListener('submit', submitListener);
    }

    function CheckDateFormatsDash2bRemove() {
        PassBirthDate2.removeEventListener('input', inputListenerDashIb);
        PassIssueDate2.removeEventListener('input', inputListenerDashIIb);
        PassExpiryDate2.removeEventListener('input', inputListenerDashIIIb);
        sex2.removeEventListener('input', inputListenerDashIVb);
        form4a.removeEventListener('submit', submitListener);
        errorElement2[0].textContent = "";
        errorElement2[1].textContent = "";
        errorElement2[2].textContent = "";
    }
    function armeniapass() {
        display0();
        passportname.textContent = "Armenian Passport";
        passprice.textContent = "$ 3.99";
        passPlaceofbirth.value = "REPUBLIC OF ARMENIA";
        authority.value = "017";
        surname.placeholder = "ԴՈՄ";
        givenNames.placeholder = "ՋՕՀՆ";
        nationality.value = "Հայաստանի Հանրապետություն";
        nationality.placeholder = "Հայաստանի Հանրապետություն";
        placeofbirth.value = "Հայաստանի Հանրապետություն";
        placeofbirth.placeholder = "Հայաստանի Հանրապետություն";
        sex.placeholder = "Մ";
        surnameLabel.textContent = "Surname (armenian)";
        givenNameLabel.textContent = "Given names (armenian)";
        nationalityLabel.textContent = "Nationality (armenian)";
        PlaceofbirthLabel.textContent = "Place of Birth (armenian)";
        SexLabel.textContent = "Sex (armenian)";
        passSexDiv.style.display = "none";
        CheckPassDateFormats();
        CheckDateFormatsDashRemove();
        CheckDateFormatsDash2Remove();
    }
    function belaruspass() {
        display();
        passportname2.textContent = "Belarus Passport";
        passprice2.textContent = "$ 3.99";
        passDoc2.placeholder = "KB1234567";
        passPlaceofbirth2.value = "TJK";
        passPlaceofbirth2.placeholder = "TJK";
        authority2.value = "MINISTRY OF INTERNAL AFFAIRS";
        authority2.placeholder = "MINISTRY OF INTERNAL AFFAIRS";
        personalNoLabel2.textContent = "ID Number (14 characters) -- Not necessary";
        personalNo.value = "";
        personalNo.placeholder = "1234567M123PB5";
        personalNo.removeAttribute("required");
        sexDiv2.style.display = "none";
        CheckPassDateFormats2();
        CheckDateFormatsDashbRemove();
        CheckDateFormatsDash2bRemove();
    }
    function russiapass() {
        display();
        passportname2.textContent = "Russia Passport";
        passprice2.textContent = "$ 2.99";
        passSurnameLabel2.textContent = "Surname (ФАМИЛИЯ)";
        passSurname2.placeholder = "ЛИ";
        passGivenameLabel2.textContent = "Name (ИМЯ)";
        passGivename2.placeholder = "ДЖОН";
        passDocLabel2.textContent = "Patronymic (ОТЧЕСТВО)";
        passDoc2.placeholder = "ДОУ";
        passSexLabel2.textContent = "Sex (СЕКС)";
        passSex2.placeholder = "МУЖ.";
        passPlaceofbirth2.value = "";
        passPlaceofbirth2.placeholder = "РОССИЯ";
        placeofbirthLabel.textContent = "Place of Birth - Место рождения";
        authority2.value = "";
        authority2.placeholder = "АВТОРИТЕТ";
        authorityLabel2.textContent = "Authority - АВТОРИТЕТ";
        SexLabel2.textContent = "Department code - КОД ДЕПАРТАМЕНТА ";
        sex2.placeholder = "230-458";
        sex2.value = "";
        personalNoLabel2.textContent = "Passport cover (ON or OFF) - Обложка паспорта";
        personalNo.placeholder = "ON";
        personalNo.value = "ON";
        optionalDiv2.style.display = "block";
        optionalLabel.textContent = "MRZ Field (ON or OFF) - MRZ-поле";
        optional.placeholder = "ON";
        optional.value = "ON";
        CheckPassDateFormats2();
        CheckDateFormatsDashbRemove();
        CheckDateFormatsDash2bRemove();
    }
    function kazakhstanpass() {
        display0();
        passportname.textContent = "Kazakhstan Passport";
        passprice.textContent = "$ 3.99";
        passSurnameLabel.textContent = "Surname (latin)";
        passGivenameLabel.textContent = "Given names (latin)";
        passDoc.placeholder = "N12345678";
        passPlaceofbirth.placeholder = "ДОУ";
        placeofbirthLabel.textContent = "Surname (kazakh)";
        authority.placeholder = "ДЖОН";
        authorityLabel.textContent = "Given names (kazakh)";
        surname.placeholder = "MINISTRY OF INTERNAL AFFAIRS";
        surname.value = "MINISTRY OF INTERNAL AFFAIRS";
        givenNames.placeholder = "012345678912";
        nationality.value = "ҚАЗАҚ / КАЗАК";
        nationality.placeholder = "ҚАЗАҚ / КАЗАК";
        placeofbirth.value = "KAZAKHSTAN";
        placeofbirth.placeholder = "KAZAKHSTAN";
        surnameLabel.textContent = "Authority";
        givenNameLabel.textContent = "Personal Number (12 digits) - not necessary";
        nationalityLabel.textContent = "Nationality";
        givenNames.removeAttribute("required");
        sexDiv.style.display = "none";
        passSexDivb.style.display = "none";
        CheckPassDateFormats();
        CheckDateFormatsDashRemove();
        CheckDateFormatsDash2Remove();
    }
    function ukrainepass() {
        display0();
        passportname.textContent = "Ukraine Passport";
        passprice.textContent = "$ 3.99";
        passSurnameLabel.textContent = "Surname (latin)";
        passGivenameLabel.textContent = "Given names (latin)";
        passDocLabel.textContent = "Document Number (8 characters)";
        passDoc.placeholder = "FB123456";
        passPlaceofbirth.placeholder = "ДОУ";
        placeofbirthLabel.textContent = "Surname (cyrillic)";
        authority.placeholder = "ДЖОН";
        authorityLabel.textContent = "Given names (cyrillic)";
        surname.placeholder = "12345678-12345";
        givenNames.placeholder = "НХ   429561";
        givenNames.value = "НХ   429561";
        nationality.placeholder = "1234";
        placeofbirth.placeholder = "УКРАЇНА";
        surnameLabel.textContent = "Record No.";
        givenNameLabel.textContent = "Optional Data (3 SPACE)";
        givenNames.removeAttribute("required");
        nationalityLabel.textContent = "Authority";
        PlaceofbirthLabel.textContent = "Place of Birth";
        nationalityDiv.style.display = "block";
        sexDiv.style.display = "none";
        passSexDivb.style.display = "none";
        CheckPassDateFormats();
        CheckDateFormatsDashRemove();
        CheckDateFormatsDash2Remove();
    }
    function usapass() {
        display();
        passportname2.textContent = "USA Passport";
        passDocLabel2.textContent = "Document Number";
        passDoc2.placeholder = "123456789";
        passPlaceofbirth2.value = "";
        passPlaceofbirth2.placeholder = "California, U.S.A";
        authority2.value = "See Page 27";
        authority2.placeholder = "See Page 27";
        authorityLabel2.textContent = "Endorsements";
        personalNoLabel2.textContent = "SSN (leave blank for random number)";
        personalNo.value = "";
        personalNo.placeholder = "123456789";
        personalNo.removeAttribute("required");
        SexLabel2.textContent = "Nationality";
        sex2.placeholder = "UNITED STATES OF AMERICA";
        sex2.value = "UNITED STATES OF AMERICA";
        optionalDiv2.style.display = "block";
        optional.placeholder = "1234";
        optionalLabel.textContent = "Additional Number (4 digits)";
        CheckPassDateFormats2();
        CheckDateFormatsDashbRemove();
        CheckDateFormatsDash2bRemove();
    }
    function passFlagclicked() {
        armenia.addEventListener('click', function () {
            armeniapass();
        })
        armeniapassCIS.addEventListener('click', function () {
            armeniapass();
        })
        australia.addEventListener('click', function () {
            display();
            passportname2.textContent = "Australian Passport";
            passPlaceofbirth2.value = "SYDNEY";
            passPlaceofbirth2.placeholder = "SYDNEY";
            authority2.value = "AUSTRALIA";
            authority2.placeholder = "AUSTRALIA";
            personalNoLabel2.textContent = "Personal Number (9 characters)";
            personalNo.value = "";
            personalNo.placeholder = "85716545A";
            passSexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        austria.addEventListener('click', function () {
            display();
            passportname2.textContent = "Austria Passport";
            passDocLabel2.textContent = "Document Number (8 characters)";
            passDoc2.placeholder = "U1234567";
            passPlaceofbirth2.value = "VILLACH";
            passPlaceofbirth2.placeholder = "VILLACH";
            authority2.value = "BURGERMEISTER";
            authority2.placeholder = "BURGERMEISTER";
            authorityLabel2.textContent = "Authority (Line 1)"
            personalNoLabel2.textContent = "Authority (Line 2) -- not necesaary";
            personalNo.removeAttribute("required");
            personalNo.value = "";
            personalNo.placeholder = "MAG. VILLACH";
            sex2.value = "190 cm";
            sex2.placeholder = "190 cm";
            SexLabel2.textContent = "Height";
            optionalDiv2.style.display = "block";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        bangladesh.addEventListener('click', function () {
            display();
            passportname2.textContent = "Bangladesh Passport";
            passprice2.textContent = "$ 3.99";
            passDoc2.placeholder = "BY1234567";
            passGivenameLabel2.textContent = "Given names (Not necessary!)";
            passGivename2.removeAttribute("required");
            passPlaceofbirth2.value = "DHAKA";
            passPlaceofbirth2.placeholder = "DHAKA";
            authority2.value = "DIP / DHAKA";
            authority2.placeholder = "DIP / DHAKA";
            personalNoLabel2.textContent = "Personal Number (10 digits)";
            personalNo.value = "";
            personalNo.placeholder = "1234567890";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        belarus.addEventListener('click', function () {
            belaruspass();
        })
        belaruspassCIS.addEventListener('click', function () {
            belaruspass();
        })
        brazil.addEventListener('click', function () {
            display();
            passportname2.textContent = "Brazil Passport";
            passprice2.textContent = "$ 3.99";
            passDocLabel2.textContent = "Document Number (8 characters)"
            passDoc2.placeholder = "AA123456";
            passPlaceofbirth2.value = "BRASÍLIA/DF";
            passPlaceofbirth2.placeholder = "BRASÍLIA/DF";
            authority2.value = "DPAS/DPF";
            authority2.placeholder = "DPAS/DPF";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        bulgaria.addEventListener('click', function () {
            display0();
            passSurname.placeholder = "ПЕТРОВ";
            passGivename.placeholder = "ВАСИЛ ВЕСЕЛИНОВ";
            passportname.textContent = "Bulgaria Passport";
            passDoc.placeholder = "123456789";
            passDocLabel.textContent = "Passport number (9 digits)";
            passSexDivb.style.display = "none";
            passPlaceofbirth.placeholder = "PETROV";
            placeofbirthLabel.textContent = "Surname (Latin)";
            authority.placeholder = "VASIL VESELINOV";
            authorityLabel.textContent = "Given names (latin)";
            surname.placeholder = "1234567890";
            givenNames.placeholder = "MBP";
            nationality.placeholder = "Mol BGR";
            placeofbirth.placeholder = "БЪЛГАРИЯ";
            sex.placeholder = "M";
            surnameLabel.textContent = "Personal Number (10 digits)";
            givenNameLabel.textContent = "Authority (Line 1)";
            nationalityLabel.textContent = "Authority (Line 2)";
            PlaceofbirthLabel.textContent = "Place of Birth";
            sexDiv.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        cameroon.addEventListener('click', function () {
            display0();
            passportname.textContent = "Cameroon Passport";
            passprice.textContent = "$ 3.99";
            passDoc.placeholder = "01234567";
            passDocLabel.textContent = "Document number (0XXXXXXX)";
            passPlaceofbirth.placeholder = "DOUALA";
            authority.placeholder = "DGSN";
            givenNames.placeholder = "DOUALA";
            nationality.value = "CAMEROONIAN";
            nationality.placeholder = "CAMEROONIAN";
            placeofbirth.placeholder = "M0123456";
            PlaceofbirthLabel.textContent = "Personal Number (M0XXXXXX) - not necessary";
            placeofbirth.removeAttribute("required");
            givenNameLabel.textContent = "Residence";
            surnameLabel.textContent = "Height (m)";
            surname.placeholder = "1.78";
            surname.value = "1.78";
            passSexDivb.style.display = "none";
            sexDiv.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        canada.addEventListener('click', function () {
            display();
            passportname2.textContent = "Canada Passport";
            passDocLabel2.textContent = "Document Number (8 characters)"
            passDoc2.placeholder = "AB123456";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "OTTAWA";
            authority2.value = "";
            authority2.placeholder = "ONTARIO";
            authorityLabel2.textContent = "Place of issue";
            personalNoLabel2.textContent = "Nationality";
            personalNo.value = "CANADIAN/CANADIENNE";
            personalNo.placeholder = "CANADIAN/CANADIENNE";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        china.addEventListener('click', function () {
            display();
            passportname2.textContent = "China Passport";
            passDoc2.placeholder = "A12345678";
            passSurnameLabel2.textContent = "Surname (latin)";
            passGivenameLabel2.textContent = "Given names (latin)";
            passPlaceofbirth2.value = "ZHEJIANG";
            passPlaceofbirth2.placeholder = "ZHEJIANG";
            passPlaceofbirth2.textContent = "Place of birth (latin)";
            authority2.value = "";
            authority2.placeholder = "浙江";
            authorityLabel2.textContent = "Place of issue (chinese)";
            personalNoLabel2.textContent = "Place of issue (latin)";
            personalNo.value = "ZHEJIANG";
            personalNo.placeholder = "ZHEJIANG";
            sex2.placeholder = "浙江";
            sex2.value = "浙江";
            SexLabel2.textContent = "Place of Birth (chinese)";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Names (chinese)";
            optional.placeholder = "约翰刀";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        croatia.addEventListener('click', function () {
            display();
            passportname2.textContent = "Croatia Passport";
            passDocLabel2.textContent = "Document Number (9 digits)";
            passDoc2.placeholder = "123456789";
            passPlaceofbirth2.value = "ZAGREB";
            passPlaceofbirth2.placeholder = "ZAGREB";
            authority2.value = "HRVATSKO";
            authority2.placeholder = "HRVATSKO";
            authorityLabel2.textContent = "Nationality";
            personalNoLabel2.textContent = "Issued by";
            personalNo.value = "PU/ZAGREB";
            personalNo.placeholder = "PU/ZAGREB";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        czech.addEventListener('click', function () {
            display();
            passportname2.textContent = "Czech Republic Passport";
            passDoc2.textContent = "Document Number (8 digits)";
            passDoc2.placeholder = "12345678";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "JABLONEC NAD NISCOU";
            authority2.value = "";
            authority2.placeholder = "Magistrat mesta JABLONEC NAD NISOU";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number - not necessary";
            personalNo.value = "";
            personalNo.removeAttribute("required");
            personalNo.placeholder = "8610161234";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        denmark.addEventListener('click', function () {
            display();
            passportname2.textContent = "Denmark Passport";
            passDocLabel2.textContent = "Document Number (9 digits)";
            passDoc2.placeholder = "123456789";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "KØGE";
            authority2.value = "";
            authority2.placeholder = "POLITIMESTEREN I KØGE";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal code number - not necessary";
            personalNo.placeholder = "123456-1234";
            personalNo.removeAttribute("required");
            SexLabel2.textContent = "Height";
            sex2.placeholder = "175 cm";
            sex2.value = "175 cm";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "6-digit number - not necessary";
            optional.placeholder = "123456";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        dominicana.addEventListener('click', function () {
            display();
            passportname2.textContent = "Dominicana Republic Passport";
            passDocLabel2.textContent = "Document Number (RD + 7 digits)";
            passDoc2.placeholder = "RD1234567";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "SF DE MACORIS, RD";
            authority2.value = "";
            authority2.placeholder = "SAN FRANCISCO M";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number (not necessary)";
            personalNo.placeholder = "012-3456789-0";
            personalNo.removeAttribute("required");
            sexDiv2.style.display = "none";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Nationality";
            optional.placeholder = "DOMINICANA";
            optional.value = "DOMINICANA";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        estonia.addEventListener('click', function () {
            display();
            passportname2.textContent = "Estonia Passport";
            passprice2.textContent = "$ 3.99";
            passDoc2.placeholder = "KE1234567";
            passPlaceofbirth2.value = "EESTI / EST";
            passPlaceofbirth2.placeholder = "EESTI / EST";
            authority2.value = "";
            authority2.placeholder = "PPA";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "ID Number (11 digits) -- Not necessary!";
            personalNo.value = "";
            personalNo.placeholder = "12345678911";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        finland.addEventListener('click', function () {
            display();
            passportname2.textContent = "Finland Passport";
            passDoc2.placeholder = "FP1234567";
            passPlaceofbirth2.value = "HYVINKÄÄ";
            passPlaceofbirth2.placeholder = "HYVINKÄÄ";
            authority2.value = "POLIISI/ITA-UUSIMAA";
            authority2.placeholder = "POLIISI/ITA-UUSIMAA";
            authorityLabel2.textContent = "Authority (Line 1)";
            personalNoLabel2.textContent = "Authority (Line 2)";
            personalNo.value = "POLISEN/OSTRA-NYLAND";
            personalNo.placeholder = "POLISEN/OSTRA-NYLAND";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Personal Number (not necessary)";
            optional.placeholder = "123456-1234";
            optional.removeAttribute("required");
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        france.addEventListener('click', function () {
            display0();
            passportname.textContent = "France Passport";
            passDoc.placeholder = "19CA12345";
            passPlaceofbirth.placeholder = "Anytown";
            authority.placeholder = "Préfecture de Police de Paris";
            authority.value = "Préfecture de Police de Paris";
            surname.placeholder = "123 AVENUE DE FRANCE";
            givenNames.placeholder = "123 AVENUE DE FRANCE";
            nationality.placeholder = "1,82m";
            placeofbirth.placeholder = "BLEUE";
            surnameLabel.textContent = "Residense (Line 1)";
            givenNameLabel.textContent = "Residense (Line 2)";
            nationalityLabel.textContent = "Height";
            PlaceofbirthLabel.textContent = "Color of Eyes"
            sexDiv.style.display = "none";
            passSexDivb.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        germany.addEventListener('click', function () {
            display0();
            passportname.textContent = "Germany Passport";
            passDoc.placeholder = "123456789";
            passDocLabel.textContent = "Passport Number (9 digits)";
            passPlaceofbirth.placeholder = "BERLIN";
            passPlaceofbirth.value = "BERLIN";
            authority.placeholder = "STADT KÖLN";
            authority.value = "STADT KÖLN";
            passSexLabelb.textContent = "CAN (6 digits)";
            passSexb.placeholder = "123456";
            surname.placeholder = "178";
            givenNames.placeholder = "Blau";
            nationality.placeholder = "DEUTSCH";
            nationality.value = "DEUTSCH";
            placeofbirth.placeholder = "Berlin";
            surnameLabel.textContent = "Height";
            givenNameLabel.textContent = "Color of eyes";
            nationalityLabel.textContent = "Nationality";
            PlaceofbirthLabel.textContent = "Residense (Line 1)";
            SexLabel.textContent = "Residense (Line 2)";
            sex.placeholder = "Can stay empty";
            sex.removeAttribute("required");
            sexDiv.style.display = "block";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        hungary.addEventListener('click', function () {
            display();
            passportname2.textContent = "Hungary Passport";
            passDoc2.placeholder = "BD1234567";
            passDocLabel2.textContent = "Document Number (B + 8 characters)";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "BUDAPEST 07";
            authority2.value = "";
            authority2.placeholder = "KEK KH";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Nationality";
            personalNo.value = "MAGYAR/HUNGARIAN";
            personalNo.placeholder = "MAGYAR/HUNGARIAN";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        hongkong.addEventListener('click', function () {
            display();
            passportname2.textContent = "Hong Kong Passport";
            passSurnameLabel2.textContent = "Surname (latin)";
            passGivenameLabel2.textContent = "Given names (latin)";
            passDoc2.placeholder = "K12345678";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "SHANDONG";
            authority2.value = "";
            authority2.placeholder = " 杜";
            authorityLabel2.textContent = "Surname (chinese)";
            personalNoLabel2.textContent = "Given names (chinese)";
            personalNo.value = "";
            personalNo.placeholder = " 约翰";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        india.addEventListener('click', function () {
            display();
            passportname2.textContent = "India Passport";
            passprice2.textContent = "$ 3.99";
            passDoc2.placeholder = "T1234567";
            passDocLabel2.textContent = "Document Number (8 characters)";
            passPlaceofbirth2.value = "GUNDUGOLANU";
            passPlaceofbirth2.placeholder = "GUNDUGOLANU";
            authorityDiv2.style.display = "none";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Place of issue";
            optional.placeholder = "TRIVANDRUM";
            optional.value = "TRIVANDRUM";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        indonesia.addEventListener('click', function () {
            display();
            passportname2.textContent = "Indonesia Passport";
            passprice2.textContent = "$ 3.99";
            passDoc2.placeholder = "A1234567";
            passDocLabel2.textContent = "Document Number (8 characters)";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "GROBOGAN";
            authority2.value = "";
            authority2.placeholder = "YOGYAKARTA";
            authorityLabel2.textContent = "Place of issue";
            personalNoLabel2.textContent = "Reg. No - not necessary ";
            personalNo.value = "";
            personalNo.placeholder = "1A12YA8465NHPR";
            personalNo.removeAttribute("required");
            sex2.placeholder = "NIKIM 547954687354";
            SexLabel2.textContent = "Additional data - not necessary";
            sex2.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        ireland.addEventListener('click', function () {
            display();
            passportname2.textContent = "Ireland Passport";
            passDoc2.placeholder = "PH1234567";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "BAILE ATHA CLIATH/DUBLIN";
            authorityDiv2.style.display = "none";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        italy.addEventListener('click', function () {
            display0();
            passDoc.placeholder = "AB1234567";
            passportname.textContent = "Italy Passport";
            passPlaceofbirth.placeholder = "LATISANA (UD)";
            passPlaceofbirth.value = "";
            authority.placeholder = "MINISTRO AFFARI ESTERI";
            authority.value = "MINISTRO AFFARI ESTERI";
            surname.placeholder = "170";
            surname.value = "";
            givenNames.placeholder = "CELESTI";
            givenNames.value = "";
            nationality.value = "ITALIANA";
            nationality.placeholder = "ITALIANA";
            placeofbirth.value = "LATISANA (UD)";
            placeofbirth.placeholder = "LATISANA (UD)";
            surnameLabel.textContent = "Height";
            givenNameLabel.textContent = "Eye Color Code";
            nationalityLabel.textContent = "Nationality";
            PlaceofbirthLabel.textContent = "Residense"
            placeDiv.style.display = "block";
            sexDiv.style.display = "none";
            passSexDivb.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        kazakhstan.addEventListener('click', function () {
            kazakhstanpass();
        })
        kazapassCIS.addEventListener('click', function () {
            kazakhstanpass();
        })
        kenya.addEventListener('click', function () {
            display0();
            passportname.textContent = "Kenya Passport";
            passprice.textContent = "$ 3.99";
            passDoc.placeholder = "AK0123456";
            passDocLabel.textContent = "Document number (AK0XXXXXX)";
            passPlaceofbirth.placeholder = "1.78";
            passPlaceofbirth.value = "1.78";
            placeofbirthLabel.textContent = "Height";
            authority.placeholder = "GOVERNMENT OF KENYA";
            authority.value = "GOVERNMENT OF KENYA";
            authorityLabel.textContent = "Authority";
            surname.placeholder = "JOHN LEE DOE";
            givenNames.placeholder = "UJMOJA";
            nationality.value = "KENYAN";
            nationality.placeholder = "KENYAN";
            placeofbirth.value = "BLACK";
            placeofbirth.placeholder = "BLACK";
            surnameLabel.textContent = "Bearer";
            givenNameLabel.textContent = "Place of Residense";
            nationalityLabel.textContent = "Nationality";
            PlaceofbirthLabel.textContent = "Eyes";
            SexLabel.textContent = "Personal Number - not necessary ";
            sex.placeholder = "1234567";
            sexDiv.style.display = "block";
            passSexDivb.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        latvia.addEventListener('click', function () {
            display();
            passportname2.textContent = "Latvia Passport";
            passDoc2.placeholder = "LV1234567";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "RIGA";
            authority2.value = "";
            authority2.placeholder = "PMLP RIGAS 9. NODALA";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number (5 digits)";
            personalNo.value = "";
            personalNo.placeholder = "12345";
            sexDiv2.style.display = "none";
            optional.placeholder = "182";
            optionalLabel.textContent = "Height (cm)";
            optionalDiv2.style.display = "block";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        lietuva.addEventListener('click', function () {
            display();
            passportname2.textContent = "Lietuva Passport";
            passDoc2.placeholder = "12345678";
            passDocLabel2.textContent = "Document number (8 digits)";
            passPlaceofbirth2.value = "LIETUVA";
            passPlaceofbirth2.placeholder = "LIETUVA";
            authority2.value = "VILUS (05)";
            authority2.placeholder = "VILUS (05)";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number";
            personalNo.value = "";
            personalNo.placeholder = "12345678912";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        malaysia.addEventListener('click', function () {
            display();
            passportname2.textContent = "Malaysia Passport";
            passSurnameLabel2.textContent = "Surname (latin)";
            passGivenameLabel2.textContent = "Given names (latin)";
            passDoc2.placeholder = "A12345678";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "IPOH PERAK";
            authority2.value = "";
            authority2.placeholder = "UTC SUNGAI PETANI";
            authorityLabel2.textContent = "Issuing Office";
            personalNoLabel2.textContent = "Identity Number (12 digits) - not necessary";
            personalNo.value = "";
            personalNo.placeholder = "123456789012";
            sex2.placeholder = "JOHN DOE LEE";
            SexLabel2.textContent = "Names (malaysian)";
            optionalDiv2.style.display = "block";
            optional.placeholder = "178 cm";
            optionalLabel.textContent = "Height";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        mexico.addEventListener('click', function () {
            display();
            passportname2.textContent = "Mexico Passport";
            passPlaceofbirth2.value = "";
            passDocLabel2.textContent = "Document Number (G1 + 7 digits)";
            passDoc2.placeholder = "G12345678";
            passPlaceofbirth2.placeholder = "Aguascalientes";
            authority2.value = "";
            authority2.placeholder = "Aguascalientes";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "CURP/ Personal Number (18 characters)";
            personalNo.value = "";
            personalNo.placeholder = "DOLJ861016HASH01";
            SexLabel2.textContent = "Nationality";
            sex2.placeholder = "MEXICANA";
            sex2.value = "MEXICANA";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        netherlands.addEventListener('click', function () {
            display();
            passportname2.textContent = "Netherlands Passport";
            passPlaceofbirth2.value = "";
            passDocLabel2.textContent = "Document Number (2 letters + 7 characters)";
            passDoc2.placeholder = "AB1234567";
            passPlaceofbirth2.placeholder = "Amstelveen";
            authority2.value = "";
            authority2.placeholder = "Burg. van Berkelland";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number (1 + 8 digits)";
            personalNo.value = "";
            personalNo.placeholder = "184538563";
            SexLabel2.textContent = "Height";
            sex2.placeholder = "1,82m";
            sex2.value = "";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "CAN (6 digits)";
            optional.placeholder = "286130";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        newzealand.addEventListener('click', function () {
            display();
            passportname2.textContent = "New Zealand Passport";
            passPlaceofbirth2.value = "";
            passDocLabel2.textContent = "Document Number (LH + 6 digits)";
            passDoc2.placeholder = "LH123456";
            passPlaceofbirth2.placeholder = "TAIHAPE";
            authority2.value = "TIA WLG";
            authority2.placeholder = "TIA WLG";
            authorityLabel2.textContent = "Authority";
            personalNoDiv2.style.display = "none";
            SexLabel2.textContent = "Nationality";
            sex2.placeholder = "NEW ZEALAND";
            sex2.value = "NEW ZEALAND";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        norway.addEventListener('click', function () {
            display();
            passportname2.textContent = "Norway Passport";
            passDocLabel2.textContent = "Document Number (8 digits)";
            passDoc2.placeholder = "12345678";
            passPlaceofbirth2.value = "OSLO,      NOR";
            passPlaceofbirth2.placeholder = "OSLO,      NOR";
            authority2.value = "OSLO POLITIDISTRIKT";
            authority2.placeholder = "OSLO POLITIDISTRIKT";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number (5 digits)";
            personalNo.value = "";
            personalNo.placeholder = "12345";
            SexLabel2.textContent = "Height";
            sex2.placeholder = "190 cm";
            sex2.value = "";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        peru.addEventListener('click', function () {
            display();
            passportname2.textContent = "Peru Passport";
            passDocLabel2.textContent = "Document Number (9 digits)";
            passDoc2.placeholder = "123456789";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "LIMA";
            authority2.value = "";
            authority2.placeholder = "12345678";
            authorityLabel2.textContent = "Identity Number - not necessary";
            authority2.removeAttribute("required");
            personalNoDiv2.style.display = "none";
            SexLabel2.textContent = "Nationality";
            sex2.placeholder = "PERUANA";
            sex2.value = "PERUANA";
            optionalDiv2.style.display = "block";
            optional.placeholder = "87654321";
            optionalLabel.textContent = "Optional Data - not necessary";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        poland.addEventListener('click', function () {
            display();
            passportname2.textContent = "Poland Passport (2011)";
            passDoc2.placeholder = "EB1234567";
            passPlaceofbirth2.value = "WARSZAWA";
            passPlaceofbirth2.placeholder = "WARSZAWA";
            authority2.value = "WODJEWODA MAZOWIECK /1/";
            authority2.placeholder = "WODJEWODA MAZOWIECK /1/";
            authorityLabel2.textContent = "Authority";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        russia.addEventListener('click', function () {
            russiapass();
        })
        russiaF.addEventListener('click', function () {
            russiapass();
        })
        russiapassCIS.addEventListener('click', function () {
            russiapass();
        })
        serbia.addEventListener('click', function () {
            display0();
            passportname.textContent = "Serbia Passport";
            passDocLabel.textContent = "Document Number (9 digits)";
            passDoc.placeholder = "123456789";
            passPlaceofbirth.placeholder = "BEOGRAD REPUBLIKA SRBIJA";
            placeofbirthLabel.textContent = "Place of Birth";
            authority.placeholder = "MUP R SRBIJE, POLICIJSKA STANICA BEOGRAD";
            authorityLabel.textContent = "Authority";
            surname.placeholder = "SPRSKO";
            givenNames.placeholder = "0907485698574";
            nationality.placeholder = "BEOGRAD";
            placeofbirth.placeholder = "CUNARSKA 1";
            surnameLabel.textContent = "Nationality";
            givenNameLabel.textContent = "Personal Number (13 digits) - not necessary ";
            givenNames.removeAttribute("required");
            nationalityLabel.textContent = "Place of Residence (line 1)";
            PlaceofbirthLabel.textContent = "Place of Residence (line 2)";
            placeDiv.style.display = "block";
            sexDiv.style.display = "none";
            passSexDivb.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        singapore.addEventListener('click', function () {
            display0();
            passportname.textContent = "Singapore Passport";
            passprice.textContent = "$ 3.99";
            passDoc.placeholder = "K1234567E";
            passPlaceofbirth.placeholder = "SINGAPORE";
            passPlaceofbirth.value = "SINGAPORE";
            placeofbirthLabel.textContent = "Place of Birth";
            authority.placeholder = "MINISTRY OF  HOME AFFAIRS";
            authority.value = "MINISTRY OF  HOME AFFAIRS";
            authorityLabel.textContent = "Authority";
            surname.placeholder = "2";
            surname.value = "2";
            givenNames.placeholder = "S8612345Z";
            surnameLabel.textContent = "Modification number";
            givenNameLabel.textContent = "Personal Number - not necessary ";
            nationalityLabel.textContent = "Nationality";
            nationality.value = "SINGAPORE CITIZEN";
            nationality.placeholder = "SINGAPORE CITIZEN";
            placeDiv.style.display = "none";
            sexDiv.style.display = "none";
            passSexDivb.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        slovenia.addEventListener('click', function () {
            display();
            passportname2.textContent = "Slovenia Passport";
            passDoc2.placeholder = "PB1234567";
            passPlaceofbirth2.value = "Ljubljana";
            passPlaceofbirth2.placeholder = "Ljubljana";
            authority2.value = "UE Ljubljana";
            authority2.placeholder = "UE Ljubljana";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Address (Line 1)";
            personalNo.value = "";
            personalNo.placeholder = "Ljubljana";
            SexLabel2.textContent = "ID Number (13 digits) -- Not necessary";
            sex2.removeAttribute("required");
            sex2.placeholder = "123467891113";
            sex2.value = "";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Address (Line 2)";
            optional.placeholder = "Sisenska cesta 023";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        southafrica.addEventListener('click', function () {
            display();
            passportname2.textContent = "South Africa Passport";
            passprice2.textContent = "$ 3.99";
            passDocLabel2.textContent = "Document number (A0XXXXXX)";
            passDoc2.placeholder = "A0123456";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "ZAF";
            authority2.value = "";
            authority2.placeholder = "DEPT OF HOME AFFAIRS";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number - not necessary";
            personalNo.value = "";
            personalNo.placeholder = "8610166978084";
            personalNo.removeAttribute("required");
            SexLabel2.textContent = "Nationality";
            sex2.placeholder = "SOUTH AFRICAN / SUD-AFRICAINE";
            sex2.value = "SOUTH AFRICAN / SUD-AFRICAINE";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Code (5 digits) - not necessary";
            optional.placeholder = "12345";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        spain.addEventListener('click', function () {
            display();
            passportname2.textContent = "Spain Passport";
            passDoc2.placeholder = "AAF123456";
            passPlaceofbirth2.value = "MADRID (MADRID)";
            passPlaceofbirth2.placeholder = "MADRID (MADRID)";
            authority2.value = "DGP-64752A6PK 123456";
            authority2.placeholder = "DGP-64752A6PK 123456";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "ID Number (11 characters)";
            personalNo.value = "";
            personalNo.placeholder = "A12345678911";
            SexLabel2.textContent = "Nationality";
            sex2.placeholder = "ESPAÑOLA";
            sex2.value = "ESPAÑOLA";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Surname (line2) - optional";
            optional.placeholder = "LEE";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        sweden.addEventListener('click', function () {
            display();
            passportname2.textContent = "Sweden Passport";
            passDocLabel2.textContent = "Passport Number (8 digits)";
            passDoc2.placeholder = "A0123456";
            passPlaceofbirth2.value = "STOCKHOLM";
            passPlaceofbirth2.placeholder = "STOCKHOLM";
            authority2.value = "POLISMUNDIGHETEN I STOCKHOLM LÄN";
            authority2.placeholder = "POLISMUNDIGHETEN I STOCKHOLM LÄN";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "Personal Number (4 digits) -- Not necessary";
            personalNo.value = "";
            personalNo.placeholder = "1234";
            personalNo.removeAttribute("required");
            SexLabel2.textContent = "Height (cm)";
            sex2.placeholder = "180";
            sex2.value = "";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        switzerland.addEventListener('click', function () {
            display();
            passportname2.textContent = "Switzerland Passport";
            passDocLabel2.textContent = "Document Number (8 characters)";
            passDoc2.placeholder = "F1234567";
            passPlaceofbirth2.value = "Basel BS";
            passPlaceofbirth2.placeholder = "Basel BS";
            authority2.value = "Basel-Stadt BS";
            authority2.placeholder = "Basel-Stadt BS";
            authorityLabel2.textContent = "Authority";
            personalNoDiv2.style.display = "none";
            SexLabel2.textContent = "Height (cm)";
            sex2.placeholder = "180";
            sex2.value = "";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        turkey.addEventListener('click', function () {
            display();
            passportname2.textContent = "Turkey Passport";
            passprice2.textContent = "$ 3.99";
            passDoc2.placeholder = "U12345678";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "AGRI";
            authority2.value = "";
            authority2.placeholder = "GAZIEMIR";
            authorityLabel2.textContent = "Place of issue";
            personalNoLabel2.textContent = "Personal Number (11 digits) -- Not necessary";
            personalNo.value = "";
            personalNo.placeholder = "01234567891";
            personalNo.removeAttribute("required");
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        uae.addEventListener('click', function () {
            display0();
            passportname.textContent = "UAE Passport";
            passSurnameLabel.textContent = "Surname (latin)";
            passGivenameLabel.textContent = "Given names (latin)";
            passDoc.placeholder = "C12345678";
            passPlaceofbirth.placeholder = "ABU DHABI";
            placeofbirthLabel.textContent = "Place of Birth";
            authority.placeholder = "ABU DHABI";
            authorityLabel.textContent = "Issuing Authority";
            passSexLabelb.textContent = "Nationality";
            passSexb.placeholder = "United Arab Emirates";
            passSexb.value = "United Arab Emirates";
            surname.placeholder = "دو جون لي";
            givenNames.placeholder = "الإمارات العربية المتحدة";
            givenNames.value = "الإمارات العربية المتحدة";
            nationality.placeholder = "ذكر";
            placeofbirth.placeholder = "أبو ظبي";
            sex.placeholder = "أبو ظبي";
            surnameLabel.textContent = "Names (arab)";
            givenNameLabel.textContent = "Nationality (arab) ";
            nationalityLabel.textContent = "Sex (arab)";
            PlaceofbirthLabel.textContent = "Place of Birth (arab)";
            SexLabel.textContent = "Issuing Authority (arab)"
            sexDiv.style.display = "block";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        uk.addEventListener('click', function () {
            display();
            passportname2.textContent = "UK Passport";
            passDocLabel2.textContent = "Document Number (9 digits)";
            passDoc2.placeholder = "123456789";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "LONDON";
            authority2.value = "GBR";
            authority2.placeholder = "GBR";
            authorityLabel2.textContent = "Nationality (Code)";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        ukraine.addEventListener('click', function () {
            ukrainepass();
        })
        ukrainepassCIS.addEventListener('click', function () {
            ukrainepass();
        })
        usa.addEventListener('click', function () {
            usapass();
        })
        usaPass.addEventListener('click', function () {
            usapass();
        })
        venezuela.addEventListener('click', function () {
            display();
            passportname2.textContent = "Venezuela Passport";
            passDocLabel2.textContent = "Document Number (9 digits)";
            passDoc2.placeholder = "123456789";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "EL LIMON VEN";
            authorityDiv2.style.display = "none";
            personalNoLabel2.textContent = "Personal Number (not necessary) - 8 digits";
            personalNo.value = "";
            personalNo.placeholder = "62427145";
            personalNo.removeAttribute("required");
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        vietnam.addEventListener('click', function () {
            display();
            passportname2.textContent = "Vietnam Passport";
            passDocLabel2.textContent = "Document Number (8 characters)";
            passDoc2.placeholder = "C1234567";
            passPlaceofbirth2.value = "LÂM ĐÔNG";
            passPlaceofbirth2.placeholder = "LÂM ĐÔNG";
            authority2.value = "Cục Quản lý xuất nhập cảnh";
            authority2.placeholder = "Cục Quản lý xuất nhập cảnh";
            authorityLabel2.textContent = "Place of issue";
            personalNoLabel2.textContent = "ID Number (9 digits) -- Not Necessary!";
            personalNo.value = "";
            personalNo.placeholder = "123456789";
            SexLabel2.textContent = "Name (vietnamese)";
            sex2.placeholder = "ĐẠO DOE LÊ";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
    }

    const errorElement3 = document.getElementsByClassName("errorElement3");
    const DLname = document.getElementById("DLname");
    const DLprice = document.getElementById("DLprice");
    const DLFirstLabel = document.getElementById("DLFirstLabel");
    const DLLastLabel = document.getElementById("DLLastLabel");
    const DLMiddleLabel = document.getElementById("DLMiddleLabel");
    const DLAddressLabel = document.getElementById("DLAddressLabel");
    const DLCityLabel = document.getElementById("DLCityLabel");
    const DLZipcodeLabel = document.getElementById("DLZipcodeLabel");
    const DLfirst = document.getElementById("DLfirst");
    const DLlast = document.getElementById("DLlast");
    const DLmiddle = document.getElementById("DLmiddle");
    const DLaddress = document.getElementById("DLaddress");
    const DLcity = document.getElementById("DLcity");
    const DLzipcode = document.getElementById("DLzipcode");
    const DLfirstDiv = document.getElementById("DLfirstDiv");
    const DLmiddleDiv = document.getElementById("DLmiddleDiv");
    const DLlastDiv = document.getElementById("DLlastDiv");
    const DLaddressDiv = document.getElementById("DLaddressDiv");
    const DLcityDiv = document.getElementById("DLcityDiv");
    const DLzipcodeDiv = document.getElementById("DLzipcodeDiv");
    const DLBirthLabel = document.getElementById("DLBirthLabel");
    const DLIssueLabel = document.getElementById("DLIssueLabel");
    const DLExpireLabel = document.getElementById("DLExpireLabel");
    const DLDocLabel = document.getElementById("DLDocLabel");
    const DLSexLabel = document.getElementById("DLSexLabel");
    const DLbirth = document.getElementById("DLbirth");
    const DLissue = document.getElementById("DLissue");
    const DLexpire = document.getElementById("DLexpire");
    const DLdoc = document.getElementById("DLdoc");
    const DLsex = document.getElementById("DLsex");
    const DLbirthDiv = document.getElementById("DLbirthDiv");
    const DLissueDiv = document.getElementById("DLissueDiv");
    const DLexpireDiv = document.getElementById("DLexpireDiv");
    const DLdocDiv = document.getElementById("DLdocDiv");
    const DLsexDiv = document.getElementById("DLsexDiv");
    const DLheight = document.getElementById("DLheight");
    const DLweight = document.getElementById("DLweight");
    const DLeye = document.getElementById("DLeye");
    const DLhair = document.getElementById("DLhair");
    const DLopt = document.getElementById("DLopt");
    const DLHeightLabel = document.getElementById("DLHeightLabel");
    const DLWeightLabel = document.getElementById("DLWeightLabel");
    const DLEyeLabel = document.getElementById("DLEyeLabel");
    const DLHairLabel = document.getElementById("DLHairLabel");
    const DLOptLabel = document.getElementById("DLOptLabel");
    const DLheightDiv = document.getElementById("DLheightDiv");
    const DLweightDiv = document.getElementById("DLweightDiv");
    const DLeyeDiv = document.getElementById("DLeyeDiv");
    const DLhairDiv = document.getElementById("DLhairDiv");
    const DLoptDiv = document.getElementById("DLoptDiv");
    const usaDL = document.getElementById("usaDL");
    const austriaDL = document.getElementById("austriaDL");
    const belgiumDL = document.getElementById("belgiumDL");
    const canadaDL = document.getElementById("canadaDL");
    const australiaDL = document.getElementById("australiaDL");
    const belarusDL = document.getElementById("belarusDL");
    const brazilDL = document.getElementById("brazilDL");
    const denmarkDL = document.getElementById("denmarkDL");
    const finlandDL = document.getElementById("finlandDL");
    const franceDL = document.getElementById("franceDL");
    const germanyDL = document.getElementById("germanyDL");
    const irelandDL = document.getElementById("irelandDL");
    const italyDL = document.getElementById("italyDL");
    const japanDL = document.getElementById("japanDL");
    const kazakhstanDL = document.getElementById("kazakhstanDL");
    const nigeriaDL = document.getElementById("nigeriaDL");
    const norwayDL = document.getElementById("norwayDL");
    const polandDL = document.getElementById("polandDL");
    const romaniaDL = document.getElementById("romaniaDL");
    const russiaDL = document.getElementById("russiaDL");
    const slovakiaDL = document.getElementById("slovakiaDL");
    const spainDL = document.getElementById("spainDL");
    const swedenDL = document.getElementById("swedenDL");
    const turkeyDL = document.getElementById("turkeyDL");
    const ukraineDL = document.getElementById("ukraineDL");
    const ukDL = document.getElementById("ukDL");

    const russiaDLCIS = document.getElementById("russiaDLCIS");
    const russiaDLF = document.getElementById("russiaDLF");

    function displayDL() {
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        driverLicenseForm.style.display = "block";
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        DLHairLabel.textContent = "Hair Color Code";
        DLhair.value = "";
        DLhair.placeholder = "SDY";
        DLoptDiv.style.display = "block";
        DLcity.placeholder = "Anytown";
        DLzipcode.placeholder = "12345";
        DLdoc.placeholder = "DOE**JL764P5";
        DLheight.placeholder = "071 IN";
        DLHeightLabel.textContent = "Height";
        DLWeightLabel.textContent = "Weight (lb)";
        DLweight.placeholder = "152 (lb)";
        DLOptLabel.textContent = "Optional Number";
        DLopt.placeholder = "CV123";
        DLeye.placeholder = "BRO";
        DLEyeLabel.textContent = "Eye Color";
        DLheight.value = "";
        DLweight.value = "";
        DLhair.value = "";
        DLeye.value = "";
        DLopt.value = "";
        DLopt.setAttribute('required', 'required');
        DLeye.setAttribute('required', 'required');
        DLFirstLabel.textContent = "First Name";
        DLfirst.placeholder = "JOHN";
        DLLastLabel.textContent = "Last Name";
        DLlast.placeholder = "DOE";
        DLMiddleLabel.textContent = "Middle Name (Not Necessary!)";
        DLmiddle.placeholder = "LEE";
        DLAddressLabel.textContent = "Address";
        DLaddress.placeholder = "123 Old Main Street";
        DLCityLabel.textContent = "City";
        DLcity.placeholder = "Anytown";
        DLcityDiv.style.display = "block";
        DLzipcodeDiv.style.display = "block";
        DLBirthLabel.textContent = "Date of birth (MM/DD/YYYY)";
        DLbirth.placeholder = "10/16/1986";
        DLbirth.value = "";
        DLIssueLabel.textContent = "Date of issue (MM/DD/YYYY)";
        DLissue.placeholder = "01/21/2020";
        DLissue.value = "";
        DLexpire.value = "";
        DLDocLabel.textContent = "Document Number";
        DLdoc.placeholder = "DOE**JL764P5";
        DLdoc.type = "number";
        DLSexLabel.textContent = "Sex (M or F)";
        DLsex.placeholder = "M";
        DLsex.value = "";
        DLsex.type = "text";
        DLexpireDiv.style.display = "block";
        DLdocDiv.style.display = "block";
        DLsexDiv.style.display = "block";
        DLhairDiv.style.display = "block";
        DLoptDiv.style.display = "block";
    }
    //dd/mm/yyyy
    function CheckDateDL(dateString) {
        var regex = /^(0[1-9]|1[02])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }
    //12 feb 2002
    function CheckDateMON(dateString) {
        var regex = /^(0[1-9]|[12][0-9]|3[01]) (JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC) (19|20)\d\d$/i;
        return CheckDate(dateString, regex);
    }

    function validateInput(input, errorElement, formatFunc) {
        if (input.value.trim() === '') {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please fill out this field';
            return false;
        } else if (!formatFunc(input.value)) {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please match the requested format';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    }

    function inputListener1() {
        validateInput(this, errorElement3[0], CheckDateDL);
    }

    function inputListener2() {
        validateInput(this, errorElement3[1], CheckDateDL);
    }

    function inputListener3() {
        validateInput(this, errorElement3[2], CheckDateDL);
    }

    function submitListener(event) {
        if (!validateInput(DLbirth, errorElement3[0], CheckDateDL) ||
            !validateInput(DLissue, errorElement3[1], CheckDateDL) ||
            !validateInput(DLexpire, errorElement3[2], CheckDateDL)) {
            event.preventDefault();
        }
    }

    function CheckDLDateFormats() {
        DLbirth.addEventListener('input', inputListener1);
        DLissue.addEventListener('input', inputListener2);
        DLexpire.addEventListener('input', inputListener3);
        form9.addEventListener('submit', submitListener);
    }

    function CheckDLDateFormatsRemove() {
        DLbirth.removeEventListener('input', inputListener1);
        DLissue.removeEventListener('input', inputListener2);
        DLexpire.removeEventListener('input', inputListener3);
        form9.removeEventListener('submit', submitListener);
        errorElement3[0].textContent = "";
        errorElement3[1].textContent = "";
        errorElement3[2].textContent = "";
    }

    function inputListenerMON1() {
        validateInput(this, errorElement3[0], CheckDateMON);
    }

    function inputListenerMON2() {
        validateInput(this, errorElement3[1], CheckDateMON);
    }

    function inputListenerMON3() {
        validateInput(this, errorElement3[2], CheckDateMON);
    }

    function submitListener(event) {
        if (!validateInput(DLbirth, errorElement3[0], CheckDateMON) ||
            !validateInput(DLissue, errorElement3[1], CheckDateMON) ||
            !validateInput(DLexpire, errorElement3[2], CheckDateMON)) {
            event.preventDefault();
        }
    }

    function CheckDLDateFormatsMON() {
        DLbirth.addEventListener('input', inputListenerMON1);
        DLissue.addEventListener('input', inputListenerMON2);
        DLexpire.addEventListener('input', inputListenerMON3);
        form9.addEventListener('submit', submitListener);
    }

    function CheckDLDateFormatsMONRemove() {
        DLbirth.removeEventListener('input', inputListenerMON1);
        DLissue.removeEventListener('input', inputListenerMON2);
        DLexpire.removeEventListener('input', inputListenerMON3);
        form9.removeEventListener('submit', submitListener);
        errorElement3[0].textContent = "";
        errorElement3[1].textContent = "";
        errorElement3[2].textContent = "";
    }

    function USADrivingLicense() {
        displayDL();
        DLname.textContent = "USA Washington DL";
        DLHairLabel.textContent = "DL Class";
        DLhair.value = "D";
        DLhair.placeholder = "D";
        DLoptDiv.style.display = "none";
        CheckDLDateFormats();
        CheckDLDateFormatsMONRemove();
    }
    function DLFlagclicked() {
        usaDL.addEventListener('click', function () {
            USADrivingLicense();
        })
        dls.addEventListener('click', function () {
            USADrivingLicense();
        })
        canadaDL.addEventListener('click', function () {
            displayDL();
            DLname.textContent = "Canada Ontario Driver License";
            DLcity.placeholder = "TORONTO";
            DLzipcode.placeholder = "M4P 1R2";
            DLdoc.placeholder = "W1234 - 12345 - 12345";
            DLheight.placeholder = "175 cm";
            DLWeightLabel.textContent = "DD";
            DLweight.placeholder = "JJ2018123";
            DLHairLabel.textContent = "Class";
            DLeye.value = "BRO";
            DLhair.value = "G2";
            DLhair.placeholder = "G2";
            DLOptLabel.textContent = "Number on the back (not necessary)";
            DLopt.placeholder = "1234567";
            DLopt.removeAttribute("required");
            CheckDLDateFormats();
            CheckDLDateFormatsMONRemove();
        })
        australiaDL.addEventListener('click', function () {
            displayDL();
            DLname.textContent = "Australia Driver License";
            DLFirstLabel.textContent = "Name";
            DLfirst.placeholder = "John Doe";
            DLLastLabel.textContent = "License Number";
            DLlast.placeholder = "12345678";
            DLMiddleLabel.textContent = "Card Number";
            DLmiddle.placeholder = "1 123 123 123";
            DLAddressLabel.textContent = "Class";
            DLaddress.placeholder = "C";
            DLcityDiv.style.display = "none";
            DLzipcodeDiv.style.display = "none";
            DLBirthLabel.textContent = "Date of birth";
            DLbirth.placeholder = "16 OCT 1986";
            DLIssueLabel.textContent = "Date of expiry";
            DLissue.placeholder = "12 DEC 2025";
            DLexpireDiv.style.display = "none";
            DLdocDiv.style.display = "none";
            DLsexDiv.style.display = "none";
            DLcity.placeholder = "TORONTO";
            DLzipcode.placeholder = "M4P 1R2";
            DLdoc.placeholder = "W1234 - 12345 - 12345";
            DLheight.placeholder = "123 Anywhere Street";
            DLHeightLabel.textContent = "Address (line 1)";
            DLWeightLabel.textContent = "Address (line 2)";
            DLweight.placeholder = "Winterfell NSW 2000";
            DLeye.value = "";
            DLeye.placeholder = "74 764 786";
            DLEyeLabel.textContent = "Back number";
            DLhairDiv.style.display = "none";
            DLoptDiv.style.display = "none";
            CheckDLDateFormatsMON();
            CheckDLDateFormatsRemove();
        })
        austriaDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Austria Driving License";
            passDocLabel2.textContent = "Document number (8 digits)";
            passDoc2.placeholder = "12345678";
            passGivenameLabel2.textContent = "Name";
            passSexDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "WIEN";
            authority2.value = "";
            authority2.placeholder = "Ausstellende Behorde";
            authorityLabel2.textContent = "Authority";
            personalNoLabel2.textContent = "DVR (4 digits) -- Not Necessary!";
            personalNo.value = "";
            personalNo.placeholder = "1234";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        belarusDL.addEventListener('click', function () {
            displayDL();
            DLname.textContent = "Belarus Driving License";
            DLFirstLabel.textContent = "Surname";
            DLfirst.placeholder = "ДОЎ ";
            DLLastLabel.textContent = "Given names";
            DLlast.placeholder = "ДЖОН";
            DLMiddleLabel.textContent = "Number";
            DLmiddle.placeholder = "2AA12345";
            DLAddressLabel.textContent = "Surname (latin)";
            DLaddress.placeholder = "DOE";
            DLCityLabel.textContent = "Given names (latin)";
            DLcity.placeholder = "JOHN";
            DLzipcodeDiv.style.display = "none";
            DLdocDiv.style.display = "none";
            DLsexDiv.style.display = "none";
            DLheight.placeholder = "МІНСК";
            DLHeightLabel.textContent = "Place of Birth";
            DLWeightLabel.textContent = "Place of Birth (latin)";
            DLweight.placeholder = "MINSK";
            DLeye.value = "";
            DLeye.placeholder = "GAI MINGORISPOLKOMA";
            DLEyeLabel.textContent = "Place of issue";
            DLHairLabel.textContent = "Place of issue (latin)";
            DLhair.placeholder = "GAI MINGORISPOLKOMA";
            DLOptLabel.textContent = "Optional Data";
            DLopt.placeholder = "1234567";
            DLopt.removeAttribute("required");
            CheckDLDateFormats();
            CheckDLDateFormatsMONRemove();
        })
        belgiumDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Belgium Driving License";
            passDocLabel2.textContent = "Document number (10 digits)";
            passDoc2.placeholder = "1234567890";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "Hasselt";
            authority2.value = "";
            authority2.placeholder = "Houthalen-Helchteren";
            authorityLabel.textContent = "Place of issue";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            passSexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        brazilDL.addEventListener('click', function () {
            displayDL();
            DLname.textContent = "Brazil DL";
            DLprice.textContent = "$ 0.99";
            DLFirstLabel.textContent = "Name";
            DLfirst.placeholder = "JOHN DOE DE CAMPOS";
            DLLastLabel.textContent = "Document Number";
            DLlast.placeholder = "12345678";
            DLMiddleLabel.textContent = "Father and mother name";
            DLmiddle.placeholder = "JUVENAL INACIO DA SILVA MARIA SOCORRO SILVA";
            DLAddressLabel.textContent = "Category";
            DLaddress.placeholder = "B";
            DLcityDiv.style.display = "none";
            DLzipcodeDiv.style.display = "none";
            DLDocLabel.textContent = "Date of first issue";
            DLdoc.placeholder = "05/08/2005";
            DLdoc.type = "text";
            DLSexLabel.textContent = "Registration Number (11 digits)";
            DLsex.placeholder = "24980547901";
            DLsex.value = "24980547901";
            DLsex.type = "number";
            DLheight.placeholder = "SUMARE, SP";
            DLheight.value = "SUMARE, SP";
            DLHeightLabel.textContent = "Place of Birth";
            DLWeightLabel.textContent = "Document Number (10 digits)";
            DLweight.value = "4440190135";
            DLweight.placeholder = "4440190135";
            DLeye.value = "33860253247";
            DLeye.placeholder = "33860253247";
            DLEyeLabel.textContent = "Additional data";
            DLHairLabel.textContent = "Additional data 2";
            DLhair.value = "SP_962989277";
            DLhair.placeholder = "SP_962989277";
            DLOptLabel.textContent = "SPF Number";
            DLopt.placeholder = "714.166.164-62";
            DLopt.value = "714.166.164-62";
            CheckDLDateFormats();
            CheckDLDateFormatsMONRemove();
        })
        denmarkDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Denmark Driving License";
            passDocLabel2.textContent = "Document number (8 digits)";
            passDoc2.placeholder = "12345678";
            passSexDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "Berlin";
            authority2.value = "";
            authority2.placeholder = "Rigspolitiet";
            authorityLabel2.textContent = "Place of issue";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        finlandDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Finland Driver's License";
            passDocLabel2.textContent = "Number 1 (16 digits)";
            passDoc2.placeholder = "1234567890111213";
            passSexLabel2.textContent = "Number 2 (DDMMYY of birth date + 4 digits)";
            passSex2.placeholder = "161086-1234";
            passPlaceofbirth2.value = "FIN";
            passPlaceofbirth2.placeholder = "FIN";
            passPlaceofbirth2.textContent = "Nationality";
            authority2.value = "";
            authority2.placeholder = "Ajokorttillan viranomainen";
            authorityLabel2.textContent = "Authority";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        franceDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "France Driving License";
            passprice2.textContent = "$ 0.99";
            passDoc2.placeholder = "19AC12345";
            passSexDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "BELFORT";
            authority2.value = "";
            authority2.placeholder = "prefet 90";
            authorityLabel2.textContent = "Place of issue";
            personalNoLabel2.textContent = "Personal Number - not necessary";
            personalNo.placeholder = "012345678912";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        germanyDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Germany Driving License";
            passDoc2.placeholder = "7B9205K0C65";
            passSexDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "Berlin";
            authority2.value = "";
            authority2.placeholder = "Landratsamt Berlin";
            authorityLabel2.textContent = "Place of issue";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        irelandDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Ireland Driving License";
            passDocLabel2.textContent = "Number";
            passDoc2.placeholder = "0000A1B2C3";
            passSexDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "IRELAND";
            authority2.value = "";
            authority2.placeholder = "32 MULLAHARLIN PARK, DUBLIN RD";
            authorityLabel2.textContent = "Address (line 1) - not necessary";
            authority2.removeAttribute("required");
            personalNoLabel2.textContent = "Address (line 2) - not necessary";
            personalNo.value = "";
            personalNo.placeholder = "MARSHES UPPER, DUNDALK";
            personalNo.removeAttribute("required");
            SexLabel2.textContent = "Place of issue";
            sex2.placeholder = "ROAD SAFETY AUTHORITY";
            sex2.value = "";
            optionalDiv2.style.display = "block";
            optional.placeholder = "CO. LOUTH";
            optionalLabel.textContent = "Address (line 3) - not necessary";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        italyDL.addEventListener('click', function () {
            displayDL();
            DLname.textContent = "Italy Driving License";
            DLFirstLabel.textContent = "Surname";
            DLfirst.placeholder = "DOE";
            DLLastLabel.textContent = "Given names";
            DLlast.placeholder = "JOHN";
            DLMiddleLabel.textContent = "Number (2 letters + 7 digits + letter)";
            DLmiddle.placeholder = "RM1234567X";
            DLaddressDiv.style.display = "none";
            DLcityDiv.style.display = "none";
            DLzipcodeDiv.style.display = "none";
            DLDocLabel.textContent = "Date of issue on backside";
            DLdoc.placeholder = "15/12/2005";
            DLdoc.type = "text";
            DLsexDiv.style.display = "none";
            DLheight.placeholder = "MILANO (MI)";
            DLHeightLabel.textContent = "Place of Birth";
            DLWeightLabel.textContent = "Place of issue";
            DLweight.placeholder = "MCTC - RM";
            DLweight.type = "text";
            DLeye.placeholder = "AB 1234567";
            DLeye.removeAttribute('required');
            DLEyeLabel.textContent = "Optional Number (A + letter + spase + 7 digits)";
            DLHairLabel.textContent = "Number on backside";
            DLhair.placeholder = "71 RM7654321X";
            DLoptDiv.style.display = "none";
            CheckDLDateFormats();
            CheckDLDateFormatsMONRemove();
        })
        japanDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Japan Driving License";
            passSurnameLabel2.textContent = "Name";
            passSurname.placeholder = "约翰朵李";
            passGivenameLabel2.textContent = "Address";
            passGivename2.placeholder = "北京市朝阳区东直门外大街123号";
            passDocLabel2.textContent = "Document Number (12 digits)";
            passDoc2.placeholder = "01234567891";
            passSexLabel2.textContent = "Intra-office reference number";
            passSex2.placeholder = "12345";
            SexLabel2.textContent = "Date of first issue of other licenses(YYYY-MM-DD)";
            sex2.placeholder = "2017-12-14";
            sex2.value = "";
            authorityLabel2.textContent = "Authority (under photo)";
            authority2.placeholder = "埼玉県";
            personalNoDiv2.style.display = "none";
            placeofbirthDiv2.style.display = "none";
            PassBirthDateLabel2.textContent = "Date of birth (YYYY-MM-DD)";
            PassBirthDate2.placeholder = "1986-10-16";
            PassIssueDateLabel2.textContent = "Date of issue (YYYY-MM-DD)";
            PassIssueDate2.placeholder = "2017-12-14";
            PassExpiryDateLabel2.textContent = "Date of expiry (YYYY-MM-DD)";
            PassExpiryDate2.placeholder = "2022-11-16";
            CheckDateFormatsDash2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        kazakhstanDL.addEventListener('click', function () {
            display0();
            passportname.textContent = "Kazakhstan Driving License";
            passprice.textContent = "$ 3.99";
            passSurnameLabel.textContent = "Surname (latin)";
            passGivenameLabel.textContent = "Given names (latin)";
            passDocLabel.textContent = "Surname (kazakh)"
            passDoc.placeholder = "ДОУ";
            passSexLabel.textContent = "Given names (kazakh)";
            passSex.placeholder = "ДЖОН";
            passSexLabelb.textContent = "Place of birth";
            passSexb.placeholder = "Павлодар обл"
            passPlaceofbirth.placeholder = "Pavlodar.obl";
            placeofbirthLabel.textContent = "Place of birth (latin)";
            authority.placeholder = "1234567890";
            authorityLabel.textContent = "Optional Data (10 digits) — not necessary";
            authority.removeAttribute("required");
            surname.placeholder = "ZQ № 123456";
            surnameLabel.textContent = "Number (AA № XXXXXX)";
            givenNames.placeholder = "012345678911";
            givenNameLabel.textContent = "ЖСН/IIN (12 digits)";
            nationality.value = "";
            nationality.placeholder = "Алматы қауіпсіздік ұйымы.";
            nationalityLabel.textContent = "Place of issue";
            placeofbirth.value = "";
            placeofbirth.placeholder = "DIA of Almaty";
            PlaceofbirthLabel.textContent = "Place of issue (latin)";
            sexDiv.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        nigeriaDL.addEventListener('click', function () {
            display0();
            passportname.textContent = "Nigeria Driving License";
            passprice.textContent = "$ 3.99";
            passSurnameLabel.textContent = "First Name";
            passGivenameLabel.textContent = "Last Name";
            passDocLabel.textContent = "Middle Name (Not necessary!)";
            passDoc.removeAttribute("required");
            passDoc.placeholder = "LEE";
            passSexLabelb.textContent = "Document Number (12 symbols)";
            passSexb.placeholder = "ABC85254AB02"
            passPlaceofbirth.value = "BESIDE YORUBA MOSQUE";
            passPlaceofbirth.placeholder = "BESIDE YORUBA MOSQUE";
            placeofbirthLabel.textContent = "Address (Line 1)";
            authority.placeholder = "GALADIMAWA VILLAGE AIRPORT ROAD";
            authority.value = "GALADIMAWA VILLAGE AIRPORT ROAD";
            authorityLabel.textContent = "Address (Line 2)";
            surname.placeholder = "ABUGA";
            surname.value = "ABUGA";
            surnameLabel.textContent = "City";
            givenNames.value = "FCT";
            givenNames.placeholder = "FCT";
            givenNameLabel.textContent = "State";
            nationality.value = "1.57M";
            nationality.placeholder = "1.57M";
            nationalityLabel.textContent = "Height";
            placeofbirth.value = "N";
            placeofbirth.placeholder = "N";
            PlaceofbirthLabel.textContent = "GL";
            SexLabel.textContent = "N of K (11 digits)";
            sex.placeholder = "16324851367";
            sex.value = "16324851367";
            PassBirthDateLabel.textContent = "Date of birth (DD-MM-YYYY)";
            PassBirthDate.placeholder = "15-08-1986";
            PassIssueDateLabel.textContent = "Date of issue (DD-MM-YYYY)";
            PassIssueDate.placeholder = "25-01-2016";
            PassExpiryDateLabel.textContent = "Date of expiry (DD-MM-YYYY)";
            PassExpiryDate.placeholder = "15-08-2019";
            CheckDateFormatsDash();
            CheckPassDateFormatsRemove();
            CheckDateFormatsDash2Remove();
        })
        norwayDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Norway Driving License";
            passGivenameLabel2.textContent = "Name";
            passDocLabel2.textContent = "Document Number (XX XX XXXXXX X)";
            passDoc2.placeholder = "12 34 123456 1";
            passSexDiv2.style.display = "none";
            SexLabel2.textContent = "Place of issue";
            sex2.placeholder = "STATENS VEGVESEN";
            sex2.value = "";
            authorityLabel2.textContent = "Identity Number - not necesssary"
            authority2.placeholder = "123456 12345";
            authority2.removeAttribute("required");
            personalNoDiv2.style.display = "none";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Optional Data";
            optional.placeholder = "71(N,26396734265)";
            optional.value = "71(N,26396734265)";
            placeofbirthDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        polandDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Poland Driving License";
            passGivenameLabel2.textContent = "Name";
            passDocLabel2.textContent = "Number (0XXXX/YY/XXXX)";
            passDoc2.placeholder = "01234/23/1234";
            SexLabel2.textContent = "Place of issue";
            sex2.placeholder = "PREZYDENT m.st. WARSZAWY";
            sex2.value = "";
            authorityLabel2.textContent = "Address (line 1) — not necessary"
            authority2.placeholder = "00-222 WARSZAWA";
            authority2.removeAttribute("required");
            personalNoLabel2.textContent = "Personal Number - not necessary";
            personalNo.placeholder = "1234567890";
            personalNo.value = "";
            personalNo.removeAttribute("required");
            passPlaceofbirth2.placeholder = "WARSZAWA";
            optionalLabel.textContent = "Address (line 2) — not necessary";
            optionalDiv2.style.display = "block";
            optional.placeholder = "SANGUSZUKI";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        romaniaDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Romania DL";
            passGivenameLabel2.textContent = "Name";
            passDocLabel2.textContent = "Document Number (10 characters)";
            passDoc2.placeholder = "A1234B5678";
            passSexDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            authority2.placeholder = "SRPCIV SIBIU";
            authority2.value = "SRPCIV SIBIU";
            personalNoLabel2.textContent = "Number (4d) - not necessary";
            personalNo.placeholder = "1234567890123";
            personalNo.value = "";
            personalNo.removeAttribute("required");
            passPlaceofbirth2.placeholder = "FETESNI, SB";
            passPlaceofbirth2.value = "FETESNI, SB";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        function russiaDriveLicense() {
            display();
            passportname2.textContent = "Russia Driving License";
            passprice2.textContent = "$ 1.00";
            passSurnameLabel2.textContent = "Surname (ФАМИЛИЯ) - not necessary";
            passSurname2.placeholder = "ЛИ";
            passSurname2.removeAttribute("required");
            passGivenameLabel2.textContent = "Name (ИМЯ)";
            passGivename2.placeholder = "ДЖОН";
            passDocLabel2.textContent = "Patronymic (ОТЧЕСТВО) - not necessary";
            passDoc2.placeholder = "ДОУ";
            passDoc2.removeAttribute("required");
            passSexLabel2.textContent = "Document Number";
            passSex2.placeholder = "18 01123456";
            expiryDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "РОССИЯ";
            passPlaceofbirth2.removeAttribute("required");
            // placeofbirth.textContent = "Place of Birth (Место рождения) — not necessary (необязательно)";
            authority2.value = "";
            authority2.placeholder = "РОССИЯ 1801";
            authority2.removeAttribute("required");
            authorityLabel2.textContent = "Traffic police department (отделение ГИБДД) — not necessary (необязательно)";
            sexDiv2.style.display = "none";
            personalNoDiv2.style.display = "none";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        }
        russiaDL.addEventListener('click', function () {
            russiaDriveLicense();
        })
        russiaDLF.addEventListener('click', function () {
            russiaDriveLicense();
        })
        russiaDLCIS.addEventListener('click', function () {
            russiaDriveLicense();
        })
        slovakiaDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Slovakia Driving License";
            passDocLabel2.textContent = "Document number (8 characters)";
            passDoc2.placeholder = "E01234567";
            passSexDiv2.style.display = "none";
            expiryDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "Jastrabie pri Michalovciach";
            authority2.value = "";
            authority2.placeholder = "OR PZ v Banskej Stiavnici";
            authorityLabel2.textContent = "Place of issue";
            personalNoDiv2.style.display = "none";
            personalNo.removeAttribute("required");
            sexDiv2.style.display = "none";
            optionalLabel.textContent = "Optional Data -- Not Necessary!";
            optionalDiv2.style.display = "block";
            optional.placeholder = "KM-12345-12";
            optional.value = "";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        spainDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Spain Driver's License";
            passDocLabel2.textContent = "Document number";
            passDoc2.placeholder = "Y0025161-X";
            passSex2.placeholder = "AM B";
            passSexLabel2.textContent = "Category";
            passPlaceofbirth2.value = "ESPAÑA";
            passPlaceofbirth2.placeholder = "ESPAÑA";
            authority2.value = "";
            authority2.placeholder = "33-00";
            authorityLabel2.textContent = "Place of issue";
            personalNoDiv2.style.display = "none";
            sexDiv2.style.display = "none";
            PassBirthDateLabel2.textContent = "Date of birth (DD-MM-YYYY)";
            PassBirthDate2.placeholder = "15-08-1986";
            PassIssueDateLabel2.textContent = "Date of issue (DD-MM-YYYY)";
            PassIssueDate2.placeholder = "25-01-2016";
            PassExpiryDateLabel2.textContent = "Date of expiry (DD-MM-YYYY)";
            PassExpiryDate2.placeholder = "15-08-2019";
            CheckDateFormatsDash2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        swedenDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Sweden Driving License";
            passDocLabel2.textContent = "Document number (9 digits)";
            passDoc2.placeholder = "123456789";
            passSexDiv2.style.display = "none";
            placeofbirthDiv2.style.display = "none";
            authority2.value = "";
            authority2.placeholder = "Transportstyrelsen";
            authorityLabel2.textContent = "Place of issue";
            personalNoDiv2.style.display = "none";
            sex2.placeholder = "861016-1234";
            SexLabel2.textContent = "Identity Number";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        turkeyDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "Turkey Driving License";
            passprice2.textContent = "$ 3.99";
            passDocLabel2.textContent = "Document Number (6 digits)";
            passDoc2.placeholder = "123456";
            passSexDiv2.style.display = "none";
            passPlaceofbirth2.value = "";
            passPlaceofbirth2.placeholder = "Ankara";
            authority2.value = "";
            authority2.placeholder = "55 Samsun";
            authorityLabel2.textContent = "Place of issue";
            sexDiv2.style.display = "none";
            personalNoLabel2.textContent = "Identity Number (11 digits) - not necessary";
            personalNo.placeholder = "12345678901";
            optionalDiv2.style.display = "block";
            optionalLabel.textContent = "Optional Data";
            optional.placeholder = "AB 385628";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        ukraineDL.addEventListener('click', function () {
            display0();
            passportname.textContent = "Ukraine Driving License";
            passprice.textContent = "$ 3.99";
            passSurnameLabel.textContent = "Surname (latin)";
            passGivenameLabel.textContent = "Given names (latin)";
            passDocLabel.textContent = "Patronymic";
            passDoc.placeholder = "Іванович";
            passSex.placeholder = "BXP 123456";
            passSexLabel.textContent = "Number (ВХХ, ВХР, ВХТ + 6 digits)";
            passPlaceofbirth.placeholder = "ДОУ";
            placeofbirthLabel.textContent = "Surname (cyrillic)";
            authority.placeholder = "ДЖОН";
            authorityLabel.textContent = "Given names (cyrillic)";
            surname.placeholder = "Київ";
            givenNames.placeholder = "KYIV";
            nationality.placeholder = "TSC 5154";
            placeofbirth.placeholder = "TSC 5154";
            surnameLabel.textContent = "Place of Birth (latin)";
            givenNameLabel.textContent = "Place of Birth";
            nationalityLabel.textContent = "Authority (Latin)";
            PlaceofbirthLabel.textContent = "Authority";
            sexDiv.style.display = "none";
            passSexDivb.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        ukDL.addEventListener('click', function () {
            display();
            passportname2.textContent = "UK Driving License";
            passDocLabel2.textContent = "Document Number (10 letters)";
            passDoc2.placeholder = "GB12345678";
            passPlaceofbirth2.value = "UNITED KINGDOM";
            passPlaceofbirth2.placeholder = "UNITED KINGDOM";
            authority2.value = "";
            authority2.placeholder = "110 ORFORD ROAD, WALTHAMSTOW";
            authorityLabel2.textContent = "Address (line 1)";
            personalNoLabel2.textContent = "Address (line 2)";
            personalNo.value = "";
            personalNo.placeholder = "LONDON, BR3 OGT";
            SexLabel2.textContent = "Authority";
            sex2.placeholder = "DVLA";
            sex2.value = "DVLA";
            optionalDiv2.style.display = "block";
            optional.placeholder = "JEREM605120C99TY 94";
            optionalLabel.textContent = "MRZ Number -- You can leave it blank!";
            optional.removeAttribute("required");
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
    }

    const errorElement4 = document.getElementsByClassName("errorElement4");
    const IDname = document.getElementById("IDname");
    const IDprice = document.getElementById("IDprice");
    const IDsurnameLabel = document.getElementById("IDsurnameLabel");
    const IDgivenameLabel = document.getElementById("IDgivenameLabel");
    const IDdocLabel = document.getElementById("IDdocLabel");
    const IDsexLabel = document.getElementById("IDsexLabel");
    const IDsurname = document.getElementById("IDsurname");
    const IDgivename = document.getElementById("IDgivename");
    const IDdoc = document.getElementById("IDdoc");
    const IDsex = document.getElementById("IDsex");
    const IddocDiv = document.getElementById("IDdocDiv");
    const IDsexDiv = document.getElementById("IDsexDiv");
    const IDaLabel = document.getElementById("IDaLabel");
    const IDbLabel = document.getElementById("IDbLabel");
    const IDcLabel = document.getElementById("IDcLabel");
    const IDdLabel = document.getElementById("IDdLabel");
    const IDeLabel = document.getElementById("IDeLabel");
    const IDfLabel = document.getElementById("IDfLabel");
    const IDa = document.getElementById("IDa");
    const IDb = document.getElementById("IDb");
    const IDc = document.getElementById("IDc");
    const IDd = document.getElementById("IDd");
    const IDe = document.getElementById("IDe");
    const IDf = document.getElementById("IDf");
    const IDbDiv = document.getElementById("IDbDiv");
    const IDcDiv = document.getElementById("IDcDiv");
    const IDdDiv = document.getElementById("IDdDiv");
    const IDeDiv = document.getElementById("IDeDiv");
    const IDfDiv = document.getElementById("IDfDiv");
    const IDbirthLabel = document.getElementById("IDbirthLabel");
    const IDbirth = document.getElementById("IDbirth");
    const IDissueLabel = document.getElementById("IDissueLabel");
    const IDissue = document.getElementById("IDissue");
    const IDissueDiv = document.getElementById("IDissueDiv");
    const IDexpiryLabel = document.getElementById("IDexpiryLabel");
    const IDexpiry = document.getElementById("IDexpiry");
    const austriaID = document.getElementById("austriaID");
    const bangladeshID = document.getElementById("bangladeshID");
    const belgiumID = document.getElementById("belgiumID");
    const chinaID = document.getElementById("chinaID");
    const croatiaID = document.getElementById("croatiaID");
    const czechID = document.getElementById("czechID");
    const estoniaID = document.getElementById("estoniaID");
    const franceID = document.getElementById("franceID");
    const germanyID = document.getElementById("germanyID");
    const hongkongID = document.getElementById("hongkongID");
    const italyID = document.getElementById("italyID");
    const kazakhstanID = document.getElementById("kazakhstanID");
    const latviaID = document.getElementById("latviaID");
    const malaysiaID = document.getElementById("malaysiaID");
    const netherlandsID = document.getElementById("netherlandsID");
    const norwayID = document.getElementById("norwayID");
    const polandID = document.getElementById("polandID");
    const slovakiaID = document.getElementById("slovakiaID");
    const spainID = document.getElementById("spainID");
    const swedenID = document.getElementById("swedenID");
    const switzerlandID = document.getElementById("switzerlandID");
    const turkeyID = document.getElementById("turkeyID");
    const uaeID = document.getElementById("uaeID");
    const ukraineID = document.getElementById("ukraineID");
    const ukID = document.getElementById("ukID");
    const usaID = document.getElementById("usaID");
    const usaRID = document.getElementById("usaRID");

    const kazaIDCIS = document.getElementById("kazaIDCIS");
    const ukraineIDCIS = document.getElementById("ukraineIDCIS");
    const ukraineIDF = document.getElementById("ukraineIDF");

    function displayID() {
        IdForm.style.display = "block";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        driverLicenseForm.style.display = "none";
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        IDprice.textContent = "$ 8.99";
        IDbDiv.style.display = "block";
        IDcDiv.style.display = "block";
        IDdDiv.style.display = "block";
        IDeDiv.style.display = "block";
        IDdocLabel.textContent = "Document number (10 digits)";
        IDdoc.placeholder = "1234567890";
        IDa.placeholder = "";
        IDa.value = "";
        IDb.placeholder = "";
        IDb.value = "";
        IDaLabel.textContent = "Blood Group";
        IDa.placeholder = "A+";
        IDcLabel.textContent = "Address";
        IDc.placeholder = "";
        IDc.value = "";
        IDsurnameLabel.textContent = "Name";
        IDgivenameLabel.textContent = "Surname";
        IDsurname.placeholder = "DOE";
        IDgivename.placeholder = "JOHN";
        IDgivename.type = "text";
        IDsurname.value = "";
        IDgivename.value = "";
        IDdoc.type = "number";
        IDdLabel.textContent = "Father's Name";
        IDd.placeholder = "";
        IDd.value = "";
        IDeLabel.textContent = "Mother's Name";
        IDe.placeholder = "";
        IDe.value = "";
        IDexpiryLabel.textContent = "Date of expiration (DD.MM.YYYY)";
        IDexpiry.placeholder = "14.12.2030";
        IDexpiry.value = "";
        IDbirthLabel.textContent = "Date of birth (DD.MM.YYYY)";
        IDbirth.placeholder = "16.10.1986";
        IDbirth.value = "";
        IDissueLabel.textContent = "Date of issue (DD.MM.YYYY)";
        IDissue.placeholder = "15.12.2015";
        IDissue.value = "";
        IDc.type = "text";
        IDdoc.type = "number";
        IDsexDiv.style.display = "block";
        IDissueDiv.style.display = "block";
        IDfDiv.style.display = "none";
        IDissueDiv.style.display = "block";
        IDa.setAttribute("required", "required");
        IDb.setAttribute("required", "required");
        IDc.setAttribute("required", "required");
        IDd.setAttribute("required", "required");
    }
    //dd.mm.yyyy
    function CheckDateID(dateString) {
        var regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[02])\.(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }
    //dd-mm-yyyy
    function CheckDateIDDash(dateString) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }
    //mm-yyyy
    function CheckDateIDDash2(dateString) {
        const regex = /^(0[1-9]|1[012])-(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }
    //yyyy-mm-dd
    function CheckDateIDDash3(dateString) {
        const regex = /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        return CheckDate(dateString, regex);
    }
    //dd/mm/yyyy
    function CheckDateIDSlash(dateString) {
        var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[02])\/(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }
    //mm/dd/yyyy
    function CheckDateIDSlash2(dateString) {
        var regex = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }

    function validateInput(input, errorElement, func) {
        if (input.value.trim() === '') {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please fill out this field';
            return false;
        } else if (!func(input.value)) {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please match the requested format';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    }
    function checkInput() {
        validateInput(this, errorElement4[0], CheckDateID);
    }

    function checkIssue() {
        validateInput(this, errorElement4[1], CheckDateID);
    }

    function checkExpiry() {
        validateInput(this, errorElement4[2], CheckDateID);
    }

    function submitForm(event) {
        if (!validateInput(IDbirth, errorElement4[0], CheckDateID) ||
            !validateInput(IDissue, errorElement4[1], CheckDateID) ||
            !validateInput(IDexpiry, errorElement4[2], CheckDateID)) {
            event.preventDefault();
        }
    }

    function CheckIDDateFormats() {
        IDbirth.addEventListener('input', checkInput);
        IDissue.addEventListener('input', checkIssue);
        IDexpiry.addEventListener('input', checkExpiry);
        form13.addEventListener('submit', submitForm);
    }

    function CheckIDDateFormatsRemove() {
        IDbirth.removeEventListener('input', checkInput);
        IDissue.removeEventListener('input', checkIssue);
        IDexpiry.removeEventListener('input', checkExpiry);
        form13.removeEventListener('submit', submitForm);
        errorElement4[0].textContent = "";
        errorElement4[1].textContent = "";
        errorElement4[2].textContent = "";
    }

    function handleInputDash() {
        validateInput(this, errorElement4[0], CheckDateIDDash);
    }

    function handleIssueDash() {
        validateInput(this, errorElement4[1], CheckDateIDDash);
    }

    function handleExpiryDash() {
        validateInput(this, errorElement4[2], CheckDateIDDash2);
    }

    function handleSubmitDash(event) {
        if (!validateInput(IDbirth, errorElement4[0], CheckDateIDDash) ||
            !validateInput(IDissue, errorElement4[1], CheckDateIDDash) ||
            !validateInput(IDexpiry, errorElement4[2], CheckDateIDDash2)) {
            event.preventDefault();
        }
    }

    function CheckIDDateFormatsDash() {
        IDbirth.addEventListener('input', handleInputDash);
        IDissue.addEventListener('input', handleIssueDash);
        IDexpiry.addEventListener('input', handleExpiryDash);
        form13.addEventListener('submit', handleSubmitDash);
    }

    function CheckIDDateFormatsDashRemove() {
        IDbirth.removeEventListener('input', handleInputDash);
        IDissue.removeEventListener('input', handleIssueDash);
        IDexpiry.removeEventListener('input', handleExpiryDash);
        form13.removeEventListener('submit', handleSubmitDash);
        errorElement4[0].textContent = "";
        errorElement4[1].textContent = "";
        errorElement4[2].textContent = "";
    }

    function handleInputDash3() {
        validateInput(this, errorElement4[0], CheckDateIDDash3);
    }

    function handleIssueDash3() {
        validateInput(this, errorElement4[1], CheckDateIDDash3);
    }

    function handleExpiryDash3() {
        validateInput(this, errorElement4[2], CheckDateIDDash3);
    }

    function handleSubmitDash3(event) {
        if (!validateInput(IDbirth, errorElement4[0], CheckDateIDDash3) ||
            !validateInput(IDissue, errorElement4[1], CheckDateIDDash3) ||
            !validateInput(IDexpiry, errorElement4[2], CheckDateIDDash3)) {
            event.preventDefault();
        }
    }

    function CheckIDDateFormatsDash2() {
        IDbirth.addEventListener('input', handleInputDash3);
        IDissue.addEventListener('input', handleIssueDash3);
        IDexpiry.addEventListener('input', handleExpiryDash3);
        form13.addEventListener('submit', handleSubmitDash3);
    }

    function CheckIDDateFormatsDash2Remove() {
        IDbirth.removeEventListener('input', handleInputDash3);
        IDissue.removeEventListener('input', handleIssueDash3);
        IDexpiry.removeEventListener('input', handleExpiryDash3);
        form13.removeEventListener('submit', handleSubmitDash3);
        errorElement4[0].textContent = "";
        errorElement4[1].textContent = "";
        errorElement4[2].textContent = "";
    }

    function handleInputSlash() {
        validateInput(this, errorElement4[0], CheckDateIDSlash);
    }

    function handleIssueSlash() {
        validateInput(this, errorElement4[1], CheckDateIDSlash);
    }

    function handleExpirySlash() {
        validateInput(this, errorElement4[2], CheckDateIDSlash);
    }

    function handleSubmitSlash(event) {
        if (!validateInput(IDbirth, errorElement4[0], CheckDateIDSlash) ||
            !validateInput(IDissue, errorElement4[1], CheckDateIDSlash) ||
            !validateInput(IDexpiry, errorElement4[2], CheckDateIDSlash)) {
            event.preventDefault();
        }
    }

    function CheckIDDateFormatsSlash() {
        IDbirth.addEventListener('input', handleInputSlash);
        IDissue.addEventListener('input', handleIssueSlash);
        IDexpiry.addEventListener('input', handleExpirySlash);
        form13.addEventListener('submit', handleSubmitSlash);
    }

    function CheckIDDateFormatsSlashRemove() {
        IDbirth.removeEventListener('input', handleInputSlash);
        IDissue.removeEventListener('input', handleIssueSlash);
        IDexpiry.removeEventListener('input', handleExpirySlash);
        form13.removeEventListener('submit', handleSubmitSlash);
        errorElement4[0].textContent = "";
        errorElement4[1].textContent = "";
        errorElement4[2].textContent = "";
    }

    function handleInputSlash2() {
        validateInput(this, errorElement4[0], CheckDateIDSlash2);
    }

    function handleIssueSlash2() {
        validateInput(this, errorElement4[1], CheckDateIDSlash2);
    }

    function handleExpirySlash2() {
        validateInput(this, errorElement4[2], CheckDateIDSlash2);
    }

    function handleSubmitSlash2(event) {
        if (!validateInput(IDbirth, errorElement4[0], CheckDateIDSlash2) ||
            !validateInput(IDissue, errorElement4[1], CheckDateIDSlash2) ||
            !validateInput(IDexpiry, errorElement4[2], CheckDateIDSlash2)) {
            event.preventDefault();
        }
    }

    function CheckIDDateFormatsSlash2() {
        IDbirth.addEventListener('input', handleInputSlash2);
        IDissue.addEventListener('input', handleIssueSlash2);
        IDexpiry.addEventListener('input', handleExpirySlash2);
        form13.addEventListener('submit', handleSubmitSlash2);
    }

    function CheckIDDateFormatsSlash2Remove() {
        IDbirth.removeEventListener('input', handleInputSlash2);
        IDissue.removeEventListener('input', handleIssueSlash2);
        IDexpiry.removeEventListener('input', handleExpirySlash2);
        form13.removeEventListener('submit', handleSubmitSlash2);
        errorElement4[0].textContent = "";
        errorElement4[1].textContent = "";
        errorElement4[2].textContent = "";
    }

    function IDFlagclicked() {
        austriaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Austria ID";
            IDdocLabel.textContent = "Document number (8 digits)";
            IDdoc.placeholder = "12345678";
            IDb.placeholder = "STEYR";
            IDb.value = "STEYR";
            IDaLabel.textContent = "Height (cm)";
            IDa.placeholder = "180 cm";
            IDcLabel.textContent = "Authority";
            IDc.placeholder = "AUUSSTELLENDE BH STEYR";
            IDc.value = "AUUSSTELLENDE BH STEYR";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        bangladeshID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Bangladesh ID";
            IDprice.textContent = "$ 0.99";
            IDsurnameLabel.textContent = "Name (latin)";
            IDgivenameLabel.textContent = "Name (bengal)";
            IDsurname.placeholder = "JOHN LEE DOE";
            IDgivename.placeholder = "জন লি ডো";
            IDb.placeholder = "DHAKA";
            IDb.value = "DHAKA";
            IDc.placeholder = "ঠিকানা : বাসা / হােল্ডিং : ৪৪৬ কুমিল্লা পাড়া রোড , গ্রাম / রাস্তা : কুমিল্লা পাড়া , ডাকঘর : খিলগাঁও টি এস ও  - ১৪৯২ , খিলগাঁও , ঢাকা সিটি কর্পোরেশন , ঢাকা";
            IDc.value = "ঠিকানা : বাসা / হােল্ডিং : ৪৪৬ কুমিল্লা পাড়া রোড , গ্রাম / রাস্তা : কুমিল্লা পাড়া , ডাকঘর : খিলগাঁও টি এস ও  - ১৪৯২ , খিলগাঁও , ঢাকা সিটি কর্পোরেশন , ঢাকা";
            IDdLabel.textContent = "Father's Name (bengal)";
            IDd.placeholder = "মো। আহমেদ ইসলাম";
            IDd.value = "মো। আহমেদ ইসলাম";
            IDeLabel.textContent = "Mother's Name (bengal)";
            IDe.placeholder = "আসমা খান";
            IDe.value = "আসমা খান";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        belgiumID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Belgium ID";
            IDdocLabel.textContent = "Document number (XXX-XXXXXX-XX)";
            IDdoc.placeholder = "123-456789-12";
            IDb.placeholder = "Watermael-Boitsfort";
            IDb.value = "Watermael-Boitsfort";
            IDaLabel.textContent = "Place of issue";
            IDa.placeholder = "Leuven";
            IDcLabel.textContent = "Identification number (not necessary)";
            IDc.placeholder = "86.10.16-001.00";
            IDc.removeAttribute("required");
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        chinaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "China ID";
            IDprice.textContent = "$ 3.99";
            IDsurnameLabel.textContent = "Names (chinese)";
            IDsurname.value = "约翰·李·多";
            IDgivenameLabel.textContent = "Sex (male or female)";
            IDgivename.value = "姆";
            IDdocLabel.textContent = "Address";
            IDdoc.placeholder = "北京市朝阳区东三环中路甲1号";
            IDdoc.type = "text";
            IDsexDiv.style.display = "none";
            IDbLabel.textContent = "Nationality"
            IDb.placeholder = "汉";
            IDb.value = "汉";
            IDaLabel.textContent = "Authority";
            IDa.placeholder = "新密市公安局";
            IDa.value = "新密市公安局";
            IDcLabel.textContent = "ID Number";
            IDc.placeholder = "410182198610167573";
            IDc.value = "410182198610167573";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        croatiaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Croatia ID Card";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (9 digits)";
            IDbLabel.textContent = "Address (line 2)"
            IDb.placeholder = "SAVSKA CESTA 31";
            IDaLabel.textContent = "Address (line 1)";
            IDa.placeholder = "ZAGREB";
            IDcLabel.textContent = "Issued by";
            IDc.placeholder = "PU ZAGREBACKA";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        czechID.addEventListener('click', function () {
            display0();
            passportname.textContent = "Czech Republic ID Card";
            passDocLabel.textContent = "Document Number (9 digits)";
            passDoc.placeholder = "123456789";
            passPlaceofbirth.placeholder = "okr.PRAHA ";
            placeofbirthLabel.textContent = "Place of birth (line 2)";
            authority.placeholder = "Magistrat mesta PRAHA";
            authorityLabel.textContent = "Authority";
            passSexLabelb.textContent = "Place of birth (line 1)";
            passSexb.placeholder = "HRADCANY"
            surname.placeholder = "PRAHA, HRADCANY";
            givenNames.placeholder = "KARLOVA 227/54";
            nationality.placeholder = "123456/1234";
            placeofbirth.placeholder = "Mgr.";
            surnameLabel.textContent = "Address (line 1)";
            givenNameLabel.textContent = "Address (line 2)";
            nationalityLabel.textContent = "Personal Number";
            PlaceofbirthLabel.textContent = "Titul";
            SexLabel.textContent = "Family status";
            sex.placeholder = "jediny";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        estoniaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Estonia ID";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (9 characters)";
            IDdoc.placeholder = "AA1234567";
            IDaLabel.textContent = "ID Number (11 digits) -- Not necessary!";
            IDa.placeholder = "01234567891";
            IDa.removeAttribute("required");
            IDbDiv.style.display = "none";
            IDcDiv.style.display = "none";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        franceID.addEventListener('click', function () {
            display0();
            passportname.textContent = "France ID";
            passDocLabel.textContent = "Document Number (9 characters)";
            passDoc.placeholder = "A1B2C3D45";
            passPlaceofbirth.placeholder = "24 TER";
            placeofbirthLabel.textContent = "Address (line 2)";
            authority.placeholder = "33123 BEGLES";
            authorityLabel.textContent = "Address (line 3)";
            passSexLabelb.textContent = "Address (line 1)";
            passSexb.placeholder = "RUE ANDRE LAPELLERIE"
            surname.placeholder = "123456";
            givenNames.placeholder = "1,86 m";
            nationality.placeholder = "123456/1234";
            placeofbirth.placeholder = "PARIS";
            surnameLabel.textContent = "CAN number";
            givenNameLabel.textContent = "Height";
            nationalityLabel.textContent = "Personal Number";
            PlaceofbirthLabel.textContent = "Place of birth";
            sexDiv.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        germanyID.addEventListener('click', function () {
            display0();
            passportname.textContent = "Germany ID";
            passDocLabel.textContent = "Document Number";
            passDoc.placeholder = "123456789";
            passPlaceofbirth.placeholder = "HEIDESTRASSE 17";
            placeofbirthLabel.textContent = "Address (line 2)";
            authority.placeholder = "may be empty";
            authorityLabel.textContent = "Address (line 3)";
            passSexLabelb.textContent = "Address (line 1)";
            passSexb.placeholder = "51147 KOLN"
            surname.placeholder = "178 cm";
            surname.value = "178 cm";
            givenNames.placeholder = "BLAU";
            givenNames.value = "BLAU";
            nationality.placeholder = "DEUTSCH";
            nationality.value = "DEUTSCH";
            placeofbirth.placeholder = "BERLIN";
            placeofbirth.value = "BERLIN";
            surnameLabel.textContent = "Height";
            givenNameLabel.textContent = "Color of eyes";
            nationalityLabel.textContent = "Nationality";
            PlaceofbirthLabel.textContent = "Place of birth";
            SexLabel.textContent = "Access code";
            sex.placeholder = "123456";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        hongkongID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Hong Kong ID";
            IDprice.textContent = "$ 3.99";
            IDsurnameLabel.textContent = "Names (chinese)";
            IDsurname.placeholder = "约翰·多·李";
            IDgivenameLabel.textContent = "Names (latin)";
            IDgivename.placeholder = "John Doe Lee";
            IDdocLabel.textContent = "Document Number";
            IDdoc.placeholder = "D123456(6)";
            IDaLabel.textContent = "Symbols";
            IDa.placeholder = "***AZ";
            IDa.value = "***AZ";
            IDbLabel.textContent = "Name in Chinese Commercial Code";
            IDb.placeholder = "2814 2589 2052";
            IDexpiryLabel.textContent = "First issue date (MM-YYYY)";
            IDexpiry.placeholder = "12-2006";
            IDcDiv.style.display = "none";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            IDbirthLabel.textContent = "Date of birth (DD-MM-YYYY)";
            IDbirth.placeholder = "16-10-1986";
            IDissueLabel.textContent = "Date of issue (DD-MM-YYYY)";
            IDissue.placeholder = "15-12-2015";
            CheckIDDateFormatsDash();
            CheckIDDateFormatsRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        italyID.addEventListener('click', function () {
            display0();
            passportname.textContent = "Italy ID";
            passDoc.placeholder = "CA12345AA";
            passPlaceofbirth.placeholder = "123456";
            placeofbirthLabel.textContent = "CAN number (6 digits)";
            authority.placeholder = "SRNG";
            authorityLabel.textContent = "Additional data";
            passSexLabelb.textContent = "Place of Birth";
            passSexb.placeholder = "AVEZZANO (AQ)";
            passSexb.value = "AVEZZANO (AQ)";
            surname.placeholder = "180";
            surname.value = "180";
            givenNames.placeholder = "MODENA";
            givenNames.value = "MODENA";
            nationality.placeholder = "VIA TOMMASO PERASSI, 22 VERBANIA (VB)";
            nationality.value = "VIA TOMMASO PERASSI, 22 VERBANIA (VB)";
            placeofbirth.placeholder = "637 P 1 S A";
            placeofbirth.value = "637 P 1 S A";
            surnameLabel.textContent = "Height (cm)";
            givenNameLabel.textContent = "Place of issue";
            nationalityLabel.textContent = "Residense";
            PlaceofbirthLabel.textContent = "Birth certificate";
            SexLabel.textContent = "Fiscal Code (see below)";
            sex.placeholder = "DOEJHN86R16F257U";
            sex.value = "DOEJHN86R16F257U";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        function kazaIdCard() {
            display0();
            passportname.textContent = "Kazakhstan ID";
            passprice.textContent = "$ 3.99";
            passSurnameLabel.textContent = "Surname (latin)";
            passGivenameLabel.textContent = "Given names (latin)";
            passDoc.placeholder = "N12345678";
            passPlaceofbirth.placeholder = "ДОУ";
            placeofbirthLabel.textContent = "Surname (kazakh)";
            authority.placeholder = "ДЖОН";
            authorityLabel.textContent = "Given names (kazakh)";
            surname.placeholder = "МВД РЕСПУБЛИКИ КАЗАХСТАН";
            surname.value = "МВД РЕСПУБЛИКИ КАЗАХСТАН";
            givenNames.placeholder = "123456789123";
            nationality.value = "ҚАЗАҚ / КАЗАК";
            nationality.placeholder = "ҚАЗАҚ / КАЗАК";
            placeofbirth.value = "KAZAKHSTAN";
            placeofbirth.placeholder = "KAZAKHSTAN";
            surnameLabel.textContent = "Place of issue";
            givenNameLabel.textContent = "DNI (ИИН)";
            nationalityLabel.textContent = "Nationality";
            sexDiv.style.display = "none";
            passSexDivb.style.display = "none";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        }
        kazakhstanID.addEventListener('click', function () {
            kazaIdCard();
        })
        kazaIDCIS.addEventListener('click', function () {
            kazaIdCard();
        })
        latviaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Latvia ID";
            IDdocLabel.textContent = "Document Number (9 characters)";
            IDdoc.placeholder = "PA1234567";
            IDaLabel.textContent = "Height (cm)";
            IDa.placeholder = "180";
            IDbLabel.textContent = "Authority";
            IDb.placeholder = "PMLP RĪGAS 1.NODAĻA";
            IDb.value = "PMLP RĪGAS 1.NODAĻA";
            IDcLabel.textContent = "Personal number (not necessary)";
            IDc.placeholder = "161086-17658";
            IDc.removeAttribute("required");
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        malaysiaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Malaysia ID card";
            IDprice.textContent = "$ 3.99";
            IDsurnameLabel.textContent = "Names";
            IDsurname.placeholder = "John Doe Lee";
            IDgivenameLabel.textContent = "Number";
            IDgivename.placeholder = "123456-12-1234";
            IDgivename.type = "number";
            IDdocLabel.textContent = "Religion -- Not necessary!";
            IDdoc.placeholder = "ISLAM";
            IDdoc.type = "text";
            IDaLabel.textContent = "Address (line 1)";
            IDa.placeholder = "KAMPUNG MASJID";
            IDbLabel.textContent = "Address (line 2)";
            IDb.placeholder = "PO BOX 42";
            IDcLabel.textContent = "Address (line 3)";
            IDc.placeholder = "89007 KENINGAU";
            IDdLabel.textContent = "Address (line 4)";
            IDd.placeholder = "SABAY";
            IDbirthLabel.textContent = "Back number 1";
            IDbirth.placeholder = "123456-12-1234-12";
            IDexpiryLabel.textContent = "Back number 2";
            IDexpiry.placeholder = "A1234567";
            IDissueDiv.style.display = "none";
            IDeDiv.style.display = "none";
        })
        netherlandsID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Netherlands ID";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (9 characters)";
            IDdoc.placeholder = "AB1234567";
            IDaLabel.textContent = "Place of Birth";
            IDa.placeholder = "Amstelveen";
            IDa.value = "Amstelveen";
            IDbLabel.textContent = "Authority";
            IDb.placeholder = "Burg. van Stad en Dorp";
            IDb.value = "Burg. van Stad en Dorp";
            IDcLabel.textContent = "Personal number (9 digits)";
            IDc.placeholder = "123456789";
            IDdLabel.textContent = "Height (m)";
            IDd.placeholder = "1,82 m";
            IDd.value = "1,82m";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        norwayID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Norway ID";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (9 digits)";
            IDdoc.placeholder = "123456789";
            IDaLabel.textContent = "Identity Number (11 digits) -- not necessary";
            IDa.placeholder = "123456 12345";
            IDa.removeAttribute("required");
            IDbLabel.textContent = "CAN number";
            IDb.placeholder = "123456";
            IDcLabel.textContent = "Height";
            IDc.placeholder = "178 CM";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        polandID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Poland ID";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (9 characters)";
            IDdoc.placeholder = "ABC123456";
            IDaLabel.textContent = "Place of Birth";
            IDa.placeholder = "WARSZAWA";
            IDa.value = "WARSZAWA";
            IDbLabel.textContent = "Parents's Given names";
            IDb.placeholder = "JULIUSZ DABROWSKI";
            IDb.value = "JULIUSZ DABROWSKI";
            IDcLabel.textContent = "Authority";
            IDc.placeholder = "PREZYDENT MIASTA LEGIONOWO";
            IDc.value = "PREZYDENT MIASTA LEGIONOWO";
            IDdLabel.textContent = "Personal Number - not necessary";
            IDd.placeholder = "86011080495";
            IDd.removeAttribute("required");
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        slovakiaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Slovakia ID Card";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (8 characters)";
            IDdoc.placeholder = "JH123456";
            IDaLabel.textContent = "Place of Birth";
            IDa.placeholder = "Cadca";
            IDbLabel.textContent = "Address";
            IDb.placeholder = "Sturova 1666/5";
            IDcLabel.textContent = "Issued by";
            IDc.placeholder = "Kysucke Nove Mesto";
            IDdLabel.textContent = "Surname at birth";
            IDd.placeholder = "Mlynar";
            IDeLabel.textContent = "Personal Number";
            IDe.placeholder = "861016/1234";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        spainID.addEventListener('click', function () {
            display0();
            passportname.textContent = "Spain ID";
            passDoc.placeholder = "BIP123456";
            passPlaceofbirth.placeholder = "123456";
            placeofbirthLabel.textContent = "Number 1 (6 digits)";
            authority.placeholder = "12345A6BC";
            authorityLabel.textContent = "Number 2 (9 characters)";
            passSexLabelb.textContent = "DNI (9 characters)";
            passSexb.placeholder = "12345678Q";
            surname.placeholder = "AVDA DE MADRID S-N";
            givenNames.placeholder = "MADRID";
            nationality.placeholder = "MADRID";
            placeofbirth.placeholder = "MADRID";
            surnameLabel.textContent = "Address (Line 1)";
            givenNameLabel.textContent = "Address (Line 2)";
            nationalityLabel.textContent = "Address (Line 3)";
            PlaceofbirthLabel.textContent = "Place of Birth (Line 1)";
            SexLabel.textContent = "Place of Birth (Line 2)";
            sex.placeholder = "MADRID";
            extraDiv.style.display = "block";
            extraDiv2.style.display = "block";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        })
        swedenID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Sweden ID Card";
            IDsurnameLabel.textContent = "Efternamn";
            IDgivenameLabel.textContent = "Fornamn";
            IDdocLabel.textContent = "Kortnumber (9752 + 15 digits)";
            IDdoc.placeholder = "9752 1234 123 1234 1234";
            IDaLabel.textContent = "Utfardare";
            IDa.placeholder = "Skatteverket";
            IDbLabel.textContent = "Personnummer - not necessary";
            IDb.placeholder = "861016-1234";
            IDb.removeAttribute('required');
            IDcLabel.textContent = "Height (in cm)";
            IDc.placeholder = "178";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            IDbirthLabel.textContent = "Date of birth (YYYY-MM-DD)";
            IDbirth.placeholder = "1986-10-16";
            IDissueLabel.textContent = "Date of issue (YYYY-MM-DD)";
            IDissue.placeholder = "2019-12-15";
            IDexpiryLabel.textContent = "Date of expiry (YYYY-MM-DD)";
            IDexpiry.placeholder = "2024-12-15";
            CheckIDDateFormatsDash2();
            CheckIDDateFormatsRemove();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        switzerlandID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Switzerland ID Card";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Number (S + 7 digits)";
            IDdoc.placeholder = "S1234567";
            IDaLabel.textContent = "Place of Birth";
            IDa.placeholder = "Aarau AG";
            IDbLabel.textContent = "Authority";
            IDb.placeholder = "St. Gallen SG";
            IDcLabel.textContent = "Height (cm)";
            IDc.placeholder = "165";
            IDdDiv.style.display = "none";
            IDeDiv.style.display = "none";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        turkeyID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "Turkey ID";
            IDprice.textContent = "$ 3.99"
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (9 characters)";
            IDdoc.placeholder = "A12345678";
            IDaLabel.textContent = "Personal Number (11 digits) - not necessary";
            IDa.placeholder = "98765432111";
            IDa.removeAttribute("required");
            IDbLabel.textContent = "Place of issue";
            IDb.placeholder = "T.C. IÇİŞLERI BAKANLIĞI UN";
            IDb.value = "T.C. IÇİŞLERI BAKANLIĞI UN";
            IDcLabel.textontent = "Father's Name"
            IDc.placeholder = "ENVER HOCA";
            IDc.value = "ENVER HOCA";
            IDdLabel.textContent = "Mother's Name"
            IDd.placeholder = "LEYLA YAVUZ";
            IDd.value = "LEYLA YAVUZ";
            IDeLabel.textContent = "CAN (6 digits)";
            IDe.placeholder = "123456";
            IDfDiv.style.display = "block";
            CheckIDDateFormats();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsSlash2Remove();
        })
        uaeID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "UAE ID Card";
            IDprice.textContent = "$ 0.99"
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number (9 digits)";
            IDdoc.placeholder = "123456789";
            IDaLabel.textContent = "Names (arab)";
            IDa.placeholder = "دو جون";
            IDbLabel.textContent = "Optional data";
            IDb.placeholder = "140108/01";
            IDb.value = "140108/01";
            IDcLabel.textContent = "Personal Number (7 digits)";
            IDc.placeholder = "1234567";
            IDc.type = "number";
            IDdLabel.textContent = "Place of birth (arab)"
            IDd.placeholder = "أبو ظبي";
            IDeLabel.textContent = "Nationality";
            IDe.placeholder = "United Arab Emirates";
            IDe.value = "United Arab Emirates";
            IDbirthLabel.textContent = "Date of birth (DD/MM/YYYY)";
            IDbirth.placeholder = "16/10/1986";
            IDexpiryLabel.textContent = "Date of expiration (DD/MM/YYYY)";
            IDexpiry.placeholder = "15/12/2024";
            IDissueDiv.style.display = "none";
            CheckIDDateFormatsSlash();
            CheckIDDateFormatsRemove();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlash2Remove();
        })
        function ukraineIdCard() {
            display0();
            passportname.textContent = "Ukraine ID";
            passprice.textContent = "$ 3.99";
            passSurnameLabel.textContent = "Surname (latin)";
            passGivenameLabel.textContent = "Given names (latin)";
            passDocLabel.textContent = "Patronymic";
            passDoc.placeholder = "Іванович";
            passSex.placeholder = "123456789";
            passSexLabel.textContent = "Document number (9 digits)";
            passPlaceofbirth.placeholder = "ДОУ";
            placeofbirthLabel.textContent = "Surname (cyrillic)";
            authority.placeholder = "ДЖОН";
            authorityLabel.textContent = "Given names (cyrillic)";
            surname.placeholder = "23413854-87361";
            givenNames.placeholder = "7645";
            nationality.placeholder = "Україна/UKR";
            placeofbirth.placeholder = "Київ";
            surnameLabel.textContent = "Record No.";
            givenNameLabel.textContent = "Authority";
            PlaceofbirthLabel.textContent = "Place of Birth";
            SexLabel.textContent = "RNTRC (РНОКПП) — 10 digits";
            sex.placeholder = "7863290927";
            CheckPassDateFormats();
            CheckDateFormatsDashRemove();
            CheckDateFormatsDash2Remove();
        }
        ukraineID.addEventListener('click', function () {
            ukraineIdCard();
        })
        ukraineIDF.addEventListener('click', function () {
            ukraineIdCard();
        })
        ukraineIDCIS.addEventListener('click', function () {
            ukraineIdCard();
        })
        ukID.addEventListener('click', function () {
            display0();
            passportname.textContent = "UK Residence Card";
            passDoc.placeholder = "RCX123456";
            passPlaceofbirth.placeholder = "BEIJING";
            authority.placeholder = "CHINA";
            authorityLabel.textContent = "Nationality";
            passSexLabelb.textContent = "Place of issue";
            passSexb.placeholder = "UK";
            extraLabel.textContent = "Nationality (3-letter abbreviated) - e.g., PAK, POL, BGD";
            extra.placeholder = "CHN";
            extra.setAttribute('required', 'required');
            surname.placeholder = "INDEFINITE";
            givenNames.placeholder = "LEAVE TO REMAIN";
            nationality.placeholder = "SETTLEMENT";
            surnameLabel.textContent = "Remarks (line 1)";
            givenNameLabel.textContent = "Remarks (line 2)";
            nationalityLabel.textContent = "Type of permit";
            placeDiv.style.display = "none";
            sexDiv.style.display = "none";
            extraDiv.style.display = "block";
            PassBirthDateLabel.textContent = "Date of birth (DD-MM-YYYY)";
            PassBirthDate.placeholder = "15-08-1986";
            PassIssueDateLabel.textContent = "Date of issue (DD-MM-YYYY)";
            PassIssueDate.placeholder = "25-01-2016";
            PassExpiryDateLabel.textContent = "Date of expiry (DD-MM-YYYY)";
            PassExpiryDate.placeholder = "15-08-2019";
            CheckDateFormatsDash();
            CheckPassDateFormatsRemove();
            CheckDateFormatsDash2Remove();
        })
        usaID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "United States Passport Card";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "Document Number";
            IDdoc.placeholder = "C00001234";
            IDaLabel.textContent = "Place of Birth";
            IDa.placeholder = "New York, USA";
            IDbLabel.textContent = "Number under the photo";
            IDb.placeholder = "M-1234567-12";
            IDcLabel.textContent = "SSN (leave blank for random number)";
            IDc.placeholder = "123456789";
            IDc.removeAttribute("required");
            IDdLabel.textContent = "Optional data (leave blank for random number)";
            IDd.placeholder = "A02123";
            IDd.removeAttribute("required");
            IDeDiv.style.display = "none";
            IDbirthLabel.textContent = "Date of birth (DD/MM/YYYY)";
            IDbirth.placeholder = "16/10/1986";
            IDissueLabel.textContent = "Date of issue (DD/MM/YYYY)";
            IDissue.placeholder = "15/12/2015";
            IDexpiryLabel.textContent = "Date of expiry (DD/MM/YYYY)";
            IDexpiry.placeholder = "15/12/2025";
            CheckIDDateFormatsSlash();
            CheckIDDateFormatsRemove();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlash2Remove();
        })
        usaRID.addEventListener('click', function () {
            displayID();
            IDname.textContent = "USA Green Card";
            IDprice.textContent = "$ 3.99";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "USCIC No.";
            IDdoc.placeholder = "123-456-789";
            IDaLabel.textContent = "Place of Birth";
            IDa.placeholder = "China";
            IDbLabel.textContent = "Nationality (3-letter abbreviated) - e.g., PAK, POL, BGD";
            IDb.placeholder = "CHN";
            IDcLabel.textContent = "Category";
            IDc.placeholder = "RE8";
            IDdLabel.textContent = "Optional Number — not necessary";
            IDd.placeholder = "SCR0000000001";
            IDd.removeAttribute("required");
            IDeDiv.style.display = "none";
            IDbirthLabel.textContent = "Date of birth (DD/MM/YYYY)";
            IDbirth.placeholder = "16/10/1986";
            IDissueLabel.textContent = "Date of issue (DD/MM/YYYY)";
            IDissue.placeholder = "15/12/2015";
            IDexpiryLabel.textContent = "Date of expiry (DD/MM/YYYY)";
            IDexpiry.placeholder = "15/12/2025";
            CheckIDDateFormatsSlash();
            CheckIDDateFormatsRemove();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsSlash2Remove();
        })
    }

    const errorElement5 = document.getElementsByClassName("errorElement5");
    const BILLaLabel = document.getElementById("BILLaLabel");
    const BILLbLabel = document.getElementById("BILLbLabel");
    const BILLcLabel = document.getElementById("BILLcLabel");
    const BILLdLabel = document.getElementById("BILLdLabel");
    const BILLeLabel = document.getElementById("BILLeLabel");
    const BILLa = document.getElementById("BILLa");
    const BILLb = document.getElementById("BILLb");
    const BILLc = document.getElementById("BILLc");
    const BILLd = document.getElementById("BILLd");
    const BILLe = document.getElementById("BILLe");
    const BILLaDiv = document.getElementById("BILLaDiv");
    const BILLbDiv = document.getElementById("BILLbDiv");
    const BILLcDiv = document.getElementById("BILLcDiv");
    const BILLdDiv = document.getElementById("BILLdDiv");
    const BILLeDiv = document.getElementById("BILLeDiv");
    const BILL1Label = document.getElementById("BILL1Label");
    const BILL2Label = document.getElementById("BILL2Label");
    const BILL3Label = document.getElementById("BILL3Label");
    const BILL1 = document.getElementById("BILL1");
    const BILL2 = document.getElementById("BILL2");
    const BILL3 = document.getElementById("BILL3");
    const BILL2Div = document.getElementById("BILL2Div");
    const BILL3Div = document.getElementById("BILL3Div");
    const BILLALabel = document.getElementById("BILLALabel");
    const BILLBLabel = document.getElementById("BILLBLabel");
    const BILLCLabel = document.getElementById("BILLCLabel");
    const BILLDLabel = document.getElementById("BILLDLabel");
    const BILLELabel = document.getElementById("BILLELabel");
    const BILLA = document.getElementById("BILLA");
    const BILLB = document.getElementById("BILLB");
    const BILLC = document.getElementById("BILLC");
    const BILLD = document.getElementById("BILLD");
    const BILLE = document.getElementById("BILLE");
    const BILLCDiv = document.getElementById("BILLCDiv");
    const BILLDDiv = document.getElementById("BILLDDiv");
    const BILLEDiv = document.getElementById("BILLEDiv");
    const BILLname = document.getElementById("BILLname");
    const BILLprice = document.getElementById("BILLprice");
    const citibank = document.getElementById("citibank");
    const tmobile = document.getElementById("tmobile");
    const barclays = document.getElementById("barclays");
    const bbva = document.getElementById("bbva");
    const bofa = document.getElementById("bofa");
    const belgiumBILL = document.getElementById("belgiumBILL");
    const billScottish = document.getElementById("billScottish");
    const canadaBILL = document.getElementById("canadaBILL");
    const californiaBILL = document.getElementById("californiaBILL");
    const chinapowerBILL = document.getElementById("chinapowerBILL");
    const chaseState = document.getElementById("chaseState");
    const ukBILL = document.getElementById("ukBILL");
    const texasBILL = document.getElementById("texasBILL");
    const postbankState = document.getElementById("postbankState");
    const revolutState = document.getElementById("revolutState");
    const netsState = document.getElementById("netsState");
    const scanaBILL = document.getElementById("scanaBILL");
    const italyBILL = document.getElementById("italyBILL");
    const rostelBILL = document.getElementById("rostelBILL");
    const californiaCard = document.getElementById("californiaCard");
    const dls = document.getElementById("dls");
    const USAMilitary = document.getElementById("USAMilitary");

    function displayBILL() {
        IdForm.style.display = "none";
        BillsandStatements.style.display = "block";
        USA.style.display = "none";
        driverLicenseForm.style.display = "none";
        passportForm.style.display = "none";
        secondpassSection.style.display = "none";
        BILLprice.textContent = "$ 8.99";
        BILLa.value = "";
        BILLb.value = "";
        BILLc.value = "";
        BILLd.value = "";
        BILLe.value = "";
        BILLD.value = "";
        BILLE.value = "";
        BILLaLabel.textContent = "Names";
        BILLbLabel.textContent = "Account No. (8 digits)";
        BILLcLabel.textContent = "Address (line 1)";
        BILLdLabel.textContent = "Address (line 2)";
        BILLeLabel.textContent = "Optional Number - not necessary";
        BILLa.placeholder = "JOHN DOE LEE";
        BILLb.placeholder = "12345678";
        BILLc.placeholder = "ANYWHERE STREET. 23";
        BILLd.placeholder = "ANYTOWN CA";
        BILLe.placeholder = "11419-2204";
        BILL1Label.textContent = "Checking Activity - ending balance ($)";
        BILL2Label.textContent = "Savings Activity - ending balance ($)";
        BILL1.placeholder = "10565.54";
        BILL2.textContent = "42954.32";
        BILLALabel.textContent = "Statement period start date";
        BILLBLabel.textContent = "Statement period end date";
        BILLCLabel.textContent = "Account Number (8 digits)";
        BILLDLabel.textContent = "SWIFTBIC";
        BILLELabel.textContent = "IBAN";
        BILLA.placeholder = "2022-05-20";
        BILLB.placeholder = "2022-06-20";
        BILLC.placeholder = "12345678";
        BILLD.placeholder = "BUKBGB23";
        BILLE.placeholder = "GB23 BUKB 5108 0190 6559 57";
        BILLA.value = "";
        BILLB.value = "";
        BILLC.value = "";
        BILL1.type = "number";
        BILL2.type = "number";
        BILL3Label.textContent = "Zip Code";
        BILL3.placeholder = "27483-6432";
        BILL3.value = "";
        BILL3.type = "number";
        BILLb.type = "number";
        BILLc.type = "text";
        BILLd.type = "text";
        BILLe.type = "number";
        BILLA.type = "text";
        BILLB.type = "text";
        BILLC.type = "number";
        BILLD.type = "number";
        BILLE.type = "text";
        BILL3Div.style.display = "none";
        BILLCDiv.style.display = "none";
        BILLDDiv.style.display = "none";
        BILLEDiv.style.display = "none";
        BILLdDiv.style.display = "block";
        BILLeDiv.style.display = "block";
        BILLbDiv.style.display = "block";
        BILL2Div.style.display = "block";
        BILLb.setAttribute("required", "required");
        BILLc.setAttribute("required", "required");
        BILLC.setAttribute("required", "required");
        BILLD.setAttribute("required", "required");
    }

    //yyyy-mm-dd
    function CheckDateBillDash(dateString) {
        const regex = /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        return CheckDate(dateString, regex);
    }
    //dd-mm-yyyy
    function CheckDateBillDash2(dateString) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }
    //09 Feb 2022
    function CheckDateBillMON(dateString) {
        var regex = /^(0[1-9]|[12][0-9]|3[01]) (JAN|FEB|MARCH|APRIL|MAY|JUNE|JULY|AUG|SEP|OCT|NOV|DEC) (19|20)\d\d$/i;
        return CheckDate(dateString, regex);
    }
    //dd.mm.yyyy
    function CheckDateBill(dateString) {
        var regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[02])\.(19|20)\d\d$/;
        return CheckDate(dateString, regex);
    }

    function validateInput(input, errorElement, func) {
        if (input.value.trim() === '') {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please fill out this field';
            return false;
        } else if (!func(input.value)) {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please enter a valid date format';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    }

    function inputListenerBILL() {
        validateInput(this, errorElement5[0], CheckDateBill);
    }

    function submitListener(event) {
        if (!validateInput(BILLc, errorElement5[0], CheckDateBill)) {
            event.preventDefault();
        }
    }

    function CheckBILLDateFormats() {
        BILLc.addEventListener('input', inputListenerBILL);
        form16.addEventListener('submit', submitListener);
    }

    function CheckBILLDateFormatsRemove() {
        BILLc.removeEventListener('input', inputListener);
        form16.removeEventListener('submit', submitListener);
        errorElement5.textContent = "";
    }
    function handleBILLAMON() {
        validateInput(this, errorElement5[1], CheckDateBillMON);
    }

    function handleBILLBMON() {
        validateInput(this, errorElement5[2], CheckDateBillMON);
    }

    function handleSubmitBILL(event) {
        if (!validateInput(BILLA, errorElement5[1], CheckDateBillMON) ||
            !validateInput(BILLB, errorElement5[2], CheckDateBillMON)) {
            event.preventDefault();
        }
    }

    function CheckBILLDateFormatsMON() {
        BILLA.addEventListener('input', handleBILLAMON);
        BILLB.addEventListener('input', handleBILLBMON);
        form16.addEventListener('submit', handleSubmitBILL);
    }

    function CheckBILLDateFormatsMONRemove() {
        BILLA.removeEventListener('input', handleBILLAMON);
        BILLB.removeEventListener('input', handleBILLBMON);
        form16.removeEventListener('submit', handleSubmitBILL);
        errorElement5[1].textContent = "";
        errorElement5[2].textContent = "";
    }

    function handleBILLADash() {
        validateInput(this, errorElement5[1], CheckDateBillDash);
    }

    function handleBILLBDash() {
        validateInput(this, errorElement5[2], CheckDateBillDash);
    }

    function handleSubmitBILL(event) {
        if (!validateInput(BILLA, errorElement5[1], CheckDateBillDash) ||
            !validateInput(BILLB, errorElement5[2], CheckDateBillDash)) {
            event.preventDefault();
        }
    }

    function CheckBILLDateFormatsDash() {
        BILLA.addEventListener('input', handleBILLADash);
        BILLB.addEventListener('input', handleBILLBDash);
        form16.addEventListener('submit', handleSubmitBILL);
    }

    function CheckBILLDateFormatsDashRemove() {
        BILLA.removeEventListener('input', handleBILLADash);
        BILLB.removeEventListener('input', handleBILLBDash);
        form16.removeEventListener('submit', handleSubmitBILL);
        errorElement5[1].textContent = "";
        errorElement5[2].textContent = "";
    }
    function handleBILLAInput() {
        validateInput(this, errorElement5[1], CheckDateBillMON);
    }

    function handleBILLBInput() {
        validateInput(this, errorElement5[2], CheckDateBillDash2);
    }

    function handleBILLCInput() {
        validateInput(this, errorElement5[3], CheckDateBillDash2);
    }

    function handleSubmitBILL(event) {
        if (!validateInput(BILLA, errorElement5[1], CheckDateBillMON) ||
            !validateInput(BILLB, errorElement5[2], CheckDateBillDash2) ||
            !validateInput(BILLC, errorElement5[3], CheckDateBillDash2)) {
            event.preventDefault();
        }
    }

    function CheckBILLDateFormatsDash2() {
        BILLA.addEventListener('input', handleBILLAInput);
        BILLB.addEventListener('input', handleBILLBInput);
        BILLC.addEventListener('input', handleBILLCInput);
        form16.addEventListener('submit', handleSubmitBILL);
    }

    function CheckBILLDateFormatsDash2Remove() {
        BILLA.removeEventListener('input', handleBILLAInput);
        BILLB.removeEventListener('input', handleBILLBInput);
        BILLC.removeEventListener('input', handleBILLCInput);
        form16.removeEventListener('submit', handleSubmitBILL);
        errorElement5[1].textContent = "";
        errorElement5[2].textContent = "";
        errorElement5[3].textContent = "";
    }

    function BillFlagClicked() {
        citibank.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Citibank Statement (PDF)";
            BILLa.value = "JOHN DOE LEE";
            BILLb.value = "12345678";
            BILLc.value = "ANYWHERE ST. 223";
            BILLd.value = "ANYTOWN CA";
            CheckBILLDateFormatsDash();
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        tmobile.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "T-Mobile Bill (PDF)";
            BILLaLabel.textContent = "First Name";
            BILLbLabel.textContent = "Last Name";
            BILLb.type = "text";
            BILLcLabel.textContent = "Account No. (9 digits)";
            BILLc.type = "number";
            BILLdLabel.textContent = "Optional Number - not necessary";
            BILLeLabel.textContent = "Phone Number";
            BILLa.placeholder = "JOHN";
            BILLb.placeholder = "DOE";
            BILLc.placeholder = "123456789";
            BILLd.placeholder = "2636454562684087464646";
            BILLe.placeholder = "(562) 381-0194";
            BILL1Label.textContent = "Address (line 1)";
            BILL2Label.textContent = "Address (line 2)";
            BILL1.type = "text";
            BILL2.type = "text";
            BILL1.placeholder = "ANYWHERE ST. 223";
            BILL2.placeholder = "Anytown CA";
            BILL3Div.style.display = "block";
            CheckBILLDateFormatsDash();
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        barclays.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Barclays Statement";
            BILLa.placeholder = "John Doe Lee"
            BILLbDiv.style.display = "none";
            BILLc.placeholder = "10 HUTON GARDENS";
            BILLd.placeholder = "HARROW";
            BILLeLabel.textContent = "Address (line 3)";
            BILLe.placeholder = "Ha3 6RA";
            BILLe.type = "text";
            BILLALabel.textContent = "Date 1";
            BILLBLabel.textContent = "Date 2";
            BILLCDiv.style.display = "block";
            BILLDDiv.style.display = "block";
            BILLD.value = "BUKBGB23";
            BILLE.value = "GB23 BUKB 5108 0190 6559 57";
            BILLEDiv.style.display = "block";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            BILLA.placeholder = "09 Jan 2022";
            BILLB.placeholder = "07 Feb 2022";
            CheckBILLDateFormatsMON();
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        bbva.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "BBVA Statement";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "John Doe Lee";
            BILLbLabel.textContent = "Address";
            BILLb.placeholder = "123 Old Main Street";
            BILLb.type = "text";
            BILLcLabel.textContent = "City";
            BILLc.placeholder = "Anytown";
            BILLdLabel.textContent = "State (Two-letter code)";
            BILLd.placeholder = "UT";
            BILLeLabel.textContent = "Zip Code";
            BILLe.placeholder = "12345";
            BILLALabel.textContent = "Date 1";
            BILLBLabel.textContent = "Date 2";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Account Number (10 digits)";
            BILLC.placeholder = "1234567890";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            BILLA.placeholder = "09 Jan 2022";
            BILLB.placeholder = "07 Feb 2022";
            CheckBILLDateFormatsMON();
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        bofa.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Bank of America Statement";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "John Doe Lee";
            BILLbLabel.textContent = "Address";
            BILLb.placeholder = "123 Old Main Street";
            BILLb.type = "text";
            BILLcLabel.textContent = "City";
            BILLc.placeholder = "Anytown";
            BILLdLabel.textContent = "State (Two-letter code)";
            BILLd.placeholder = "UT";
            BILLeLabel.textContent = "Zip Code";
            BILLe.placeholder = "12345";
            BILLALabel.textContent = "Date 1";
            BILLBLabel.textContent = "Date 2";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            BILLA.placeholder = "09 January 2022";
            BILLB.placeholder = "07 February 2022";
            CheckBILLDateFormatsMON();
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        belgiumBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Belgium Bill";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "John Doe Lee";
            BILLbDiv.style.display = "none";
            BILLc.placeholder = "RUE BAYEMONT 46";
            BILLd.placeholder = "6000 CCHARLEROI";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Bill Date";
            BILLA.placeholder = "29 june 2021";
            BILLA.type = "text";
            BILLBLabel.textContent = "Date 1";
            BILLB.placeholder = "28-06-2020";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Date 2";
            BILLC.placeholder = "27-06-2021";
            BILLC.type = "text";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsDash2();
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsMONRemove();
        })
        billScottish.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "UK Bill Scottish Power";
            BILLprice.textContent = "$ 5.00";
            BILLa.placeholder = "JOHN DOE";
            BILLbLabel.textContent = "Account number (not necessary)";
            BILLb.placeholder = "1234 5678 901";
            BILLb.removeAttribute("required");
            BILLcLabel.textContent = "Bill Date (DD.MM.YYYY)";
            BILLc.placeholder = "10.12.2022";
            BILLdDiv.style.display = "none";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Address (Line 1)";
            BILLA.placeholder = "APART22";
            BILLA.type = "text";
            BILLBLabel.textContent = "Address (Line 2)";
            BILLB.placeholder = "2 WOODBROOKE GROVE";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Address (Line 3)";
            BILLC.placeholder = "BIRMINGHAM";
            BILLC.type = "text";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Address (Line 4)";
            BILLD.placeholder = "B31 2FP";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormats();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        canadaBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Canada Bill Rogers";
            BILLprice.textContent = "$ 4.99";
            BILLa.placeholder = "JOHN DOE";
            BILLbLabel.textContent = "Account number (not necessary)";
            BILLb.placeholder = "1234 5678 901";
            BILLb.removeAttribute("required");
            BILLcLabel.textContent = "Bill Date (DD.MM.YYYY)";
            BILLc.placeholder = "12.02.2023";
            BILLdDiv.style.display = "none";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Address (Line 1)";
            BILLA.placeholder = "207-2500 KEELE ST";
            BILLA.type = "text";
            BILLBLabel.textContent = "Address (Line 2)";
            BILLB.placeholder = "NORTH YORK ON M6L 2N5";
            BILLB.type = "text";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormats();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        californiaBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Bill California";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "JOHN DOE LEE";
            BILLbLabel.textContent = "Address";
            BILLb.placeholder = "123 Old Main Street";
            BILLb.type = "text";
            BILLcLabel.textContent = "City";
            BILLc.placeholder = "Anytown";
            BILLdLabel.textContent = "Zip Code";
            BILLd.placeholder = "12345";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Account Number (10 digits)";
            BILLA.placeholder = "1234567890";
            BILLBLabel.textContent = "Bill Date";
            BILLB.placeholder = "04/06/2021";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Date Due";
            BILLC.placeholder = "07/06/2021";
            BILLC.type = "text";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        chinapowerBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "China Bill Power";
            BILLprice.textContent = "$ 4.99";
            BILLa.placeholder = "约翰·多·李";
            BILLbLabel.textContent = "Address";
            BILLb.placeholder = "北京市朝阳区红星商业大厦1001室";
            BILLb.type = "text";
            BILLcLabel.textContent = "Bill Date (DD.MM.YYYY) ";
            BILLc.placeholder = "09.02.2023";
            BILLc.type = "text";
            BILLdLabel.textContent = "Account number (not necessary)";
            BILLd.placeholder = "1234567890";
            BILLd.type = "number";
            BILLd.removeAttribute("required");
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Name company";
            BILLA.placeholder = "国网江西省电力公司南昌市供电公司";
            BILLA.type = "text";
            BILLBLabel.textContent = "Data item name company";
            BILLB.placeholder = "国网山西省电力公司";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Code city";
            BILLC.placeholder = "00391-725";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Meter reader";
            BILLD.placeholder = "刘晓宇";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormats();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        chaseState.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Chase Bank Statement";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "JOHN DOE LEE";
            BILLbLabel.textContent = "Address";
            BILLb.placeholder = "123 Old Main Street";
            BILLb.type = "text";
            BILLcLabel.textContent = "City";
            BILLc.placeholder = "Anytown";
            BILLdLabel.textContent = "State (Two-letter code)";
            BILLd.placeholder = "UT";
            BILLeLabel.textContent = "Zip Code";
            BILLe.placeholder = "12345";
            BILLALabel.textContent = "Date 1";
            BILLBLabel.textContent = "Date 2";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Account Number (15 digits)";
            BILLC.placeholder = "000005734649625";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        ukBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Great Britian Bill 'EE' ";
            BILLprice.textContent = "$ 5.00";
            BILLa.placeholder = "JOHN DOE";
            BILLbLabel.textContent = "Account number (not necessary)";
            BILLb.placeholder = "1234 5678 901";
            BILLb.removeAttribute("required");
            BILLcLabel.textContent = "Bill Date (DD.MM.YYYY)";
            BILLc.placeholder = "10.12.2022";
            BILLdDiv.style.display = "none";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Address (Line 1)";
            BILLA.placeholder = "50 HIGH STREET";
            BILLA.type = "text";
            BILLBLabel.textContent = "Address (Line 2)";
            BILLB.placeholder = "FECKENHAM";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Address (Line 3)";
            BILLC.placeholder = "REDDITCH";
            BILLC.type = "text";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Address (Line 4)";
            BILLD.placeholder = "WORCESTERSHIRE";
            BILLEDiv.style.display = "block";
            BILLELabel.textContent = "Address (Line 5)";
            BILLE.placeholder = "B96 6HS";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormats();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        texasBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Texas Bill";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "JOHN DOE LEE";
            BILLbLabel.textContent = "Address";
            BILLb.placeholder = "123 Old Main Street";
            BILLb.type = "text";
            BILLcLabel.textContent = "City";
            BILLc.placeholder = "Anytown";
            BILLdDiv.style.display = "none";
            BILLeLabel.textContent = "Zip Code";
            BILLe.placeholder = "12345";
            BILLALabel.textContent = "Bill Date";
            BILLA.placeholder = "04/06/2021";
            BILLA.type = "text";
            BILLBLabel.textContent = "Due Date";
            BILLB.placeholder = "07/06/2021";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Account Number (10 digits)";
            BILLC.placeholder = "6735412792";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Card number";
            BILLD.placeholder = "*1234";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        postbankState.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Postbank Statement";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "John Doe";
            BILLbLabel.textContent = "Address (line 1)";
            BILLb.placeholder = "Hauptstrasse 123";
            BILLb.type = "text";
            BILLcLabel.textContent = "Address (line 2)";
            BILLc.placeholder = "12345 Berlin";
            BILLdDiv.style.display = "none";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Date 1";
            BILLA.placeholder = "01.01.2022";
            BILLBLabel.textContent = "Date 2";
            BILLB.placeholder = "31.01.2022";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "IBAN - not necessary";
            BILLC.placeholder = "DE12 1234 1234 1234 1234 12";
            BILLC.removeAttribute("required");
            BILLC.type = "text";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        revolutState.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Revolut Statement";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "John Doe";
            BILLbLabel.textContent = "Address (line 1)";
            BILLb.placeholder = "Hauptstrasse 123";
            BILLb.type = "text";
            BILLcLabel.textContent = "Address (line 2)";
            BILLc.placeholder = "Berlin";
            BILLdLabel.textContent = "Address (line 3)";
            BILLd.placeholder = "12345";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Date 1";
            BILLA.placeholder = "01.01.2022";
            BILLBLabel.textContent = "Date 2";
            BILLB.placeholder = "31.01.2022";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "IBAN - not necessary";
            BILLC.placeholder = "DE12 1234 1234 1234 1234 12";
            BILLC.removeAttribute("required");
            BILLC.type = "text";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        netsState.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Nets Statement";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "John Doe";
            BILLbLabel.textContent = "Address (line 1)";
            BILLb.placeholder = "Hauptstrasse 123";
            BILLb.type = "text";
            BILLcLabel.textContent = "Address (line 2)";
            BILLc.placeholder = "Berlin";
            BILLdLabel.textContent = "Address (line 3)";
            BILLd.placeholder = "12345";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Date 1";
            BILLA.placeholder = "01.01.2022";
            BILLBLabel.textContent = "Date 2";
            BILLB.placeholder = "31.01.2022";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "IBAN - not necessary";
            BILLC.placeholder = "DE12 1234 1234 1234 1234 12";
            BILLC.removeAttribute("required");
            BILLC.type = "text";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        scanaBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "SCANA Bill";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "JOHN DOE";
            BILLbLabel.textContent = "Address (line 1)";
            BILLb.placeholder = "123 BLAIRWOOD DR";
            BILLb.type = "text";
            BILLcLabel.textContent = "Address (line 2)";
            BILLc.placeholder = "STUDIO CITY CA 91562";
            BILLdLabel.textContent = "Account number";
            BILLd.placeholder = "12345";
            BILLd.type = "number";
            BILLeLabel.textContent = "Payment Date";
            BILLe.placeholder = "08/01/21";
            BILLe.type = "text";
            BILLALabel.textContent = "BILLING PERIOD";
            BILLA.placeholder = "07/12/21 - 08/10/21";
            BILLA.type = "text";
            BILLBLabel.textContent = "DAYS";
            BILLB.placeholder = "29";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Meter Reading";
            BILLC.placeholder = "08/10/17";
            BILLC.type = "text";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Atlanta Gas Light Account no.";
            BILLD.placeholder = "0123456789";
            BILLEDiv.style.display = "block";
            BILLELabel.textContent = "Meter no.";
            BILLE.placeholder = "000012345";
            BILLE.type = "number";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        italyBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Italy Bill";
            BILLprice.textContent = "$ 1.99";
            BILLa.placeholder = "JOHN DOE";
            BILLbLabel.textContent = "Address (line 1)";
            BILLb.placeholder = "VIA MARGARITA 12";
            BILLb.type = "text";
            BILLcLabel.textContent = "Address (line 2)";
            BILLc.placeholder = "1234 FRANCAVILLA FONTANA (BR)";
            BILLdDiv.style.display = "none";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Payment Date";
            BILLA.placeholder = "06.08.2021";
            BILLBLabel.textContent = "Start Date";
            BILLB.placeholder = "01.05.2021";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "End Date";
            BILLC.placeholder = "30.06.2021";
            BILLC.type = "number";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Codice Fiscale - 16 digits (not necessary)";
            BILLD.placeholder = "DBS1QOBT77QRX95Q";
            BILLD.removeAttribute("required");
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        californiaCard.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Insurance Identification Card (California)";
            BILLprice.textContent = "$ 0.99";
            BILLaLabel.textContent = "Name Insured(s)";
            BILLa.placeholder = "John L Doe";
            BILLbLabel.textContent = "Policy Number";
            BILLb.placeholder = "958022364";
            BILLcLabel.textContent = "NAIC Number";
            BILLc.placeholder = "10394";
            BILLc.type = "number";
            BILLdLabel.textContent = "Effective Date";
            BILLd.placeholder = "06/17/2022";
            BILLeLabel.textContent = "Expiration Date";
            BILLe.placeholder = "12/17/2022";
            BILLe.type = "text";
            BILLALabel.textContent = "Make";
            BILLA.placeholder = "Ford";
            BILLA.type = "text";
            BILLBLabel.textContent = "Model";
            BILLB.placeholder = "Focus";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "VIN";
            BILLC.placeholder = "1RADA3K10HL375931";
            BILLC.type = "text";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Year";
            BILLD.placeholder = "2015";
            BILLEDiv.style.display = "block";
            BILLELabel.textContent = "State";
            BILLE.placeholder = "California";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
        rostelBILL.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "Russia Rostelecom Bill";
            BILLprice.textContent = "$ 1.99";
            BILLaLabel.textContent = "Фамилия";
            BILLa.placeholder = "Ли";
            BILLbLabel.textContent = "Имя";
            BILLb.placeholder = "Джон";
            BILLb.type = "text";
            BILLcLabel.textContent = "Отчество";
            BILLc.placeholder = "Джон Александрович Ли";
            BILLdLabel.textContent = "Лицевой счет";
            BILLd.placeholder = "123456789123";
            BILLd.type = "number";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Адрес (первая строка)";
            BILLA.placeholder = "123 Мейн Стрит";
            BILLA.type = "text";
            BILLBLabel.textContent = "Адрес (вторая строка)";
            BILLB.placeholder = "Кв. 456";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Дата формирования счета";
            BILLC.placeholder = "05.11.2021";
            BILLC.type = "number";
            BILLDDiv.style.display = "block";
            BILLDLabel.textContent = "Оплатить до";
            BILLD.placeholder = "25.11.2021";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL1.placeholder = "Photo";
            BILL1.type = "text";
            BILL2Div.style.display = "none";
            CheckBILLDateFormatsRemove();
            CheckBILLDateFormatsMONRemove();
            CheckBILLDateFormatsDashRemove();
            CheckBILLDateFormatsDash2Remove();
        })
    }

    const USAname = document.getElementById("USAname");
    const USAprice = document.getElementById("USAprice");
    const OthersALabel = document.getElementById("OthersALabel");
    const OthersBLabel = document.getElementById("OthersBLabel");
    const OthersCLabel = document.getElementById("OthersCLabel");
    const OthersDLabel = document.getElementById("OthersDLabel");
    const OthersA = document.getElementById("OthersA");
    const OthersB = document.getElementById("OthersB");
    const OthersC = document.getElementById("OthersC");
    const OthersD = document.getElementById("OthersD");
    const OthersaLabel = document.getElementById("OthersaLabel");
    const OthersbLabel = document.getElementById("OthersbLabel");
    const OtherscLabel = document.getElementById("OtherscLabel");
    const Othersa = document.getElementById("Othersa");
    const Othersb = document.getElementById("Othersb");
    const Othersc = document.getElementById("Othersc");
    const OthersaDiv = document.getElementById("OthersaDiv");
    const OthersbDiv = document.getElementById("OthersbDiv");
    const OtherscDiv = document.getElementById("OtherscDiv");
    const usapassCard = document.getElementById("usapassCard");
    const socSecurity = document.getElementById("socSecurity");
    const resCard = document.getElementById("resCard");
    const bankCheck = document.getElementById("bankCheck");

    function displayUSA() {
        USAname.textContent = "USA - Social Security";
        OthersbDiv.style.display = "none";
        OtherscDiv.style.display = "none";
        OthersALabel.textContent = "Name";
        OthersBLabel.textContent = "Number";
        OthersCLabel.textContent = "Date";
        OthersDLabel.textContent = "Background (1-12)";
        OthersA.placeholder = "JOHN DOE";
        OthersB.placeholder = "123-45-6789";
        OthersC.placeholder = "07/03/2015";
        OthersD.placeholder = "5";
        OthersD.type = "number";
        OthersaLabel.textContent = "Signature (JPG)";
        Othersa.placeholder = "Upload signature (JPG file)";
        Othersa.type = "file";
    }

    function displayBankCheck() {
        displayBILL();
        BILLname.textContent = "Bank Checks";
        BILLprice.textContent = "$ 1.99";
        BILLbLabel.textContent = "Address (line 1)";
        BILLb.type = "text";
        BILLcLabel.textContent = "Address (line 2)";
        BILLc.type = "number";
        BILLdLabel.textContent = "Bank (see description below)";
        BILLa.placeholder = "John Doe";
        BILLb.placeholder = "123 Anywhere Street";
        BILLc.placeholder = "Anytown, CA 12345";
        BILLc.type = "text";
        BILLd.placeholder = "1";
        BILLeDiv.style.display = "none";
        BILLALabel.textContent = "Cheque Number";
        BILLA.placeholder = "123456789";
        BILLBLabel.textContent = "MICR Code";
        BILLB.placeholder = "12345678912345678";
        BILLCDiv.style.display = "block";
        BILLCLabel.textContent = "Check Number";
        BILLC.placeholder = "00123";
        BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
        BILL2Label.textContent = "Background number (1 - 10)";
        BILL1.type = "text";
        BILL1.placeholder = "Photo";
        BILL2.placeholder = "1";
        BILL3Div.style.display = "block";
        BILL3Label.textContent = "Void (ON/OFF)";
        BILL3.placeholder = "ON";
        BILL3.value = "ON";
        BILL3.type = "text";
        CheckBILLDateFormatsRemove();
        CheckBILLDateFormatsMONRemove();
        CheckBILLDateFormatsDashRemove();
        CheckBILLDateFormatsDash2Remove();
    }

    function displayUSAmilitary() {
        displayBILL();
        BILLname.textContent = "US Military ID";
        BILLprice.textContent = "$ 3.99";
        BILLaLabel.textContent = "Last Name";
        BILLa.placeholder = "Doe";
        BILLbLabel.textContent = "First Name";
        BILLb.type = "text";
        BILLb.placeholder = "John";
        BILLcLabel.textContent = "Middle name (Not necessary!)";
        BILLc.placeholder = "LEE";
        BILLc.type = "text";
        BILLdLabel.textContent = "Pay Grade";
        BILLd.placeholder = "E5";
        BILLeLabel.textContent = "Rank";
        BILLe.placeholder = "SGT";
        BILLe.type = "text";
        BILLALabel.textContent = "Date of birth";
        BILLA.placeholder = "1986OCT16";
        BILLA.type = "text";
        BILLBLabel.textContent = "Date of issue";
        BILLB.placeholder = "2020DEC12";
        BILLB.type = "text";
        BILLCDiv.style.display = "block";
        BILLCLabel.textContent = "Date of expiry";
        BILLC.placeholder = "2021DEC12";
        BILLC.type = "text";
        BILLDDiv.style.display = "block";
        BILLDLabel.textContent = "Social Security Number (SSN)";
        BILLD.placeholder = "056-42-7253";
        BILLEDiv.style.display = "block";
        BILLELabel.textContent = "Geneva Conventions Category";
        BILLE.placeholder = "I";
        BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
        BILL2Label.textContent = "Background number 1 - 30 (Not necessary!)";
        BILL1.type = "text";
        BILL1.placeholder = "Photo";
        BILL2.placeholder = "1";
        CheckBILLDateFormatsRemove();
        CheckBILLDateFormatsMONRemove();
        CheckBILLDateFormatsDashRemove();
        CheckBILLDateFormatsDash2Remove();
    }
    function USAFlagClicked() {
        usapassCard.addEventListener('click', function () {
            display();
            passportname2.textContent = "United States Passport Card";
            passDocLabel2.textContent = "Document Number";
            passDoc2.placeholder = "C00001234";
            passPlaceofbirth2.placeholder = "New York, U.S.A";
            authority2.placeholder = "M-1234567-12";
            authorityLabel2.textContent = "Number under the photo";
            personalNoLabel2.textContent = "SSN (leave blank for random number)";
            personalNo.placeholder = "123456789";
            personalNo.removeAttribute("required");
            sexDiv2.style.display = "none";
            optionalDiv2.style.display = "block";
            optional.placeholder = "A02123";
            optionalLabel.textContent = "Optional data (leave blank for random number)";
            CheckPassDateFormats2();
            CheckDateFormatsDashbRemove();
            CheckDateFormatsDash2bRemove();
        })
        socSecurity.addEventListener('click', function () {
            displayUSA();
            USAname.textContent = "SSN";
        })
        resCard.addEventListener('click', function () {
            displayID();
            IDname.textContent = "USA Green Card";
            IDprice.textContent = "$ 3.99";
            IDsurnameLabel.textContent = "Surname";
            IDgivenameLabel.textContent = "Given names";
            IDdocLabel.textContent = "USCIC No.";
            IDdoc.placeholder = "123-456-789";
            IDaLabel.textContent = "Place of Birth";
            IDa.placeholder = "China";
            IDbLabel.textContent = "Nationality (3-letter abbreviated) - e.g., PAK, POL, BGD";
            IDb.placeholder = "CHN";
            IDcLabel.textContent = "Category";
            IDc.placeholder = "RE8";
            IDdLabel.textContent = "Optional Number - not necessary";
            IDd.placeholder = "SCR0000000001";
            IDd.removeAttribute("required");
            IDeDiv.style.display = "none";
            IDbirthLabel.textContent = "Date of birth (MM/DD/YYYY)";
            IDbirth.placeholder = "10/16/1986";
            IDissueLabel.textContent = "Date of issue (MM/DD/YYYY)";
            IDissue.placeholder = "12/15/2015";
            IDexpiryLabel.textContent = "Date of expiry (MM/DD/YYYY)";
            IDexpiry.placeholder = "12/15/2025";
            CheckIDDateFormatsSlash2();
            CheckIDDateFormatsSlashRemove();
            CheckIDDateFormatsDashRemove();
            CheckIDDateFormatsDash2Remove();
            CheckIDDateFormatsRemove();
        })
        bankCheck.addEventListener('click', function () {
            displayBankCheck();
        })
        bankChecks.addEventListener('click', function () {
            displayBankCheck();
        })
        USAMilitary.addEventListener('click', function () {
            displayUSAmilitary();
        })
        USAmilitaryID.addEventListener('click', function () {
            displayUSAmilitary();
        })
    }
    const creditCard = document.getElementById("creditCard");
    const socialSecurity = document.getElementById("socialSecurity");
    const bankChecks = document.getElementById("bankChecks");
    const USAmilitaryID = document.getElementById("USAmilitaryID");
    const UKmilitaryID = document.getElementById("UKmilitaryID");

    function OthersClicked() {
        creditCard.addEventListener('click', function () {
            displayUSA();
            USAname.textContent = "Credit Card";
            USAprice.textContent = "$ 1.99";
            OthersALabel.textContent = "Bank's name";
            OthersBLabel.textContent = "Number";
            OthersCLabel.textContent = "Valid thru";
            OthersDLabel.textContent = "Name";
            OthersA.placeholder = "Bank of America";
            OthersB.placeholder = "5012 1234 1234 1234";
            OthersC.placeholder = "01/22";
            OthersD.placeholder = "JOHN DOE";
            OthersD.type = "text";
            OthersaLabel.textContent = "Result image Type (Photo, Scan, Print)";
            Othersa.placeholder = "Photo";
            Othersa.type = "text";
            OthersbDiv.style.display = "block";
            OtherscDiv.style.display = "block";
        })
        socialSecurity.addEventListener('click', function () {
            displayUSA();
            USAname.textContent = "SSN";
        })
        UKmilitaryID.addEventListener('click', function () {
            displayBILL();
            BILLname.textContent = "UK Military ID";
            BILLprice.textContent = "$ 8.99";
            BILLaLabel.textContent = "Name";
            BILLa.placeholder = "JOHN L";
            BILLbLabel.textContent = "Surname";
            BILLb.type = "text";
            BILLb.placeholder = "DOE";
            BILLcLabel.textContent = "Number";
            BILLc.placeholder = "12345678";
            BILLc.type = "number";
            BILLdLabel.textContent = "Rang";
            BILLd.placeholder = "AB";
            BILLeDiv.style.display = "none";
            BILLALabel.textContent = "Date of birth";
            BILLA.placeholder = "16 OCT 86";
            BILLA.type = "text";
            BILLBLabel.textContent = "Date of expiry";
            BILLB.placeholder = "15 DEC 22";
            BILLB.type = "text";
            BILLCDiv.style.display = "block";
            BILLCLabel.textContent = "Height";
            BILLC.placeholder = "180 CM";
            BILLC.type = "text";
            BILL1Label.textContent = "Result image Type (Photo, Scan, Print)";
            BILL2Label.textContent = "Background number (1 - 30)";
            BILL1.type = "text";
            BILL1.placeholder = "Photo";
            BILL2.placeholder = "1";
        })
    }

    function setupLargeScreen() {
        nav.style.display = "block";
        generatesbutton.style.display = "none";
        section0.style.height = "730px";

        removeEventListeners(dropdownItems, handledropResClick1);
        removeEventListeners(dropdownItems2, handledropResClick2);
        removeEventListeners(dropdownItems3, handledropResClick3);
        removeEventListeners(dropdownItems4, handledropResClick4);
        removeEventListeners(dropdownItems5, handledropResClick5);
        removeEventListeners(dropdownItems6, handledropResClick6);
        removeEventListeners(dropdownItems7, handledropResClick7);
        removeEventListeners(dropdownItems8, handledropResClick8);

        addEventListeners(dropdownItems, handledropClick1);
        addEventListeners(dropdownItems2, handledropClick2);
        addEventListeners(dropdownItems3, handledropClick3);
        addEventListeners(dropdownItems4, handledropClick4);
        addEventListeners(dropdownItems5, handledropClick5);
        addEventListeners(dropdownItems6, handledropClick6);
        addEventListeners(dropdownItems7, handledropClick7);
        addEventListeners(dropdownItems8, handledropClick8);

        key_arrow_down.addEventListener('click', handleClick1);
        key_arrow_down2.addEventListener('click', handleClick2);
        key_arrow_down3.addEventListener('click', handleClick3);
        key_arrow_down4.addEventListener('click', handleClick4);
        key_arrow_down5.addEventListener('click', handleClick5);
        key_arrow_down6.addEventListener('click', handleClick6);
        key_arrow_down7.addEventListener('click', handleClick7);
        key_arrow_down8.addEventListener('click', handleClick8);
    }

    function setupSmallScreen() {
        nav.style.display = "none";
        generatesbutton.style.display = "block";
        section0.style.height = "230px";

        removeEventListeners(dropdownItems, handledropClick1);
        removeEventListeners(dropdownItems2, handledropClick2);
        removeEventListeners(dropdownItems3, handledropClick3);
        removeEventListeners(dropdownItems4, handledropClick4);
        removeEventListeners(dropdownItems5, handledropClick5);
        removeEventListeners(dropdownItems6, handledropClick6);
        removeEventListeners(dropdownItems7, handledropClick7);
        removeEventListeners(dropdownItems8, handledropClick8);

        addEventListeners(dropdownItems, handledropResClick1);
        addEventListeners(dropdownItems2, handledropResClick2);
        addEventListeners(dropdownItems3, handledropResClick3);
        addEventListeners(dropdownItems4, handledropResClick4);
        addEventListeners(dropdownItems5, handledropResClick5);
        addEventListeners(dropdownItems6, handledropResClick6);
        addEventListeners(dropdownItems7, handledropResClick7);
        addEventListeners(dropdownItems8, handledropResClick8);

        generatesbutton.addEventListener('click', function () {
            section0.style.height = "730px";
            nav.style.display = "block";
            generatesbutton.style.display = "none";
        });

        key_arrow_down.addEventListener('click', handleClick1);
        key_arrow_down2.addEventListener('click', handleClick2);
        key_arrow_down3.addEventListener('click', handleClick3);
        key_arrow_down4.addEventListener('click', handleClick4);
        key_arrow_down5.addEventListener('click', handleClick5);
        key_arrow_down6.addEventListener('click', handleClick6);
        key_arrow_down7.addEventListener('click', handleClick7);
        key_arrow_down8.addEventListener('click', handleClick8);
    }

    function addEventListeners(items, handler) {
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', handler);
        }
    }

    function removeEventListeners(items, handler) {
        for (let i = 0; i < items.length; i++) {
            items[i].removeEventListener('click', handler);
        }
    }

    const handledropResClick1 = function () {
        dropitemclick(dropdownItems, dropdowns, 0);
        passportForm.style.display = "block";
        driverLicenseForm.style.display = "none";
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    const handledropResClick2 = function () {
        dropitemclick(dropdownItems2, dropdowns2, 1);
        passportForm.style.display = "none";
        driverLicenseForm.style.display = "block";
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    const handledropResClick3 = function () {
        dropitemclick(dropdownItems3, dropdowns3, 2);
        passportForm.style.display = "none";
        driverLicenseForm.style.display = "none";
        IdForm.style.display = "block";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    const handledropResClick4 = function () {
        dropitemclick(dropdownItems4, dropdowns4, 3);
        passportForm.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "block";
        USA.style.display = "none";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    const handledropResClick5 = function () {
        dropitemclick(dropdownItems5, dropdowns5, 4);
        passportForm.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "block";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    const handledropResClick6 = function () {
        dropitemclick(dropdownItems6, dropdowns6, 5);
        passportForm.style.display = "block";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    const handledropResClick7 = function () {
        dropitemclick(dropdownItems7, dropdowns7, 6);
        passportForm.style.display = "block";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "none";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    const handledropResClick8 = function () {
        dropitemclick(dropdownItems8, dropdowns8, 7);
        passportForm.style.display = "none";
        driverLicenseForm.style.display = "none"
        IdForm.style.display = "none";
        BillsandStatements.style.display = "none";
        USA.style.display = "block";
        generatesbutton.style.display = "block";
        section0.style.height = "230px"
        nav.style.display = "none";
    }
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    //below can be used for image data on the most right

    //     const surnameInput = document.getElementById('surname');
    //     const nameInput = document.getElementById('name');
    //     const genderInput = document.getElementById('gender');
    //     const birthInput = document.getElementById('birth');
    //     const issueInput = document.getElementById('issue');
    //     const expiryInput = document.getElementById('exp');
    //     const birthpInput = document.getElementById('birthp');
    //     const phoneInput = document.getElementById('phone');

    //     form3.addEventListener('submit', function (event) {
    //         event.preventDefault();
    //         document.getElementById("form3-surname").value = surnameInput.value;
    //         document.getElementById("form3-name").value = nameInput.value;
    //         document.getElementById("form3-gender").value = genderInput.value;
    //         const span1 = document.getElementById("span1");
    //         const span2 = document.getElementById("span2");
    //         const span3 = document.getElementById("span3");
    //         span1.innerText = surnameInput.value;
    //         span2.innerText = nameInput.value;
    //         span3.innerText = genderInput.value;

    //         document.getElementById("form3-birth").value = birthInput.value;
    //         document.getElementById("form3-issue").value = issueInput.value;
    //         document.getElementById("form3-exp").value = expiryInput.value;
    //         const span4 = document.getElementById("span4");
    //         const span5 = document.getElementById("span5");
    //         const span6 = document.getElementById("span6");
    //         span4.innerText = birthInput.value;
    //         span5.innerText = issueInput.value;
    //         span6.innerText = expiryInput.value;

    //         const birthp = birthpInput.value;
    //         const phone = phoneInput.value;
    //         const span7 = document.getElementById("span7");
    //         const span8 = document.getElementById("span8");
    //         span7.innerText = birthp;
    //         span8.innerText = phone;
    //         setTimeout(function () {
    //             form3.submit();
    //         }, 100000)
    //     });
});
