const classes_logic = require('./classes_logic.js');

const db = require('../../../db/db.js');



describe('Test classes logic module', () => {

    test('Get correct_class', () => {

        var clas = [db.get_class_obj(), db.get_class_obj(), db.get_class_obj()];
        for(var i = 0; i < 3; i++) {
            clas[i].id = i;
            db.classes[i] = clas[i];
        }
        var valid = classes_logic.get_class();
        expect(valid).toEqual(clas);

    });



    test('Validate correct_create_class', () => {

        var clas = db.get_class_obj();
        clas.name = 'NomdeDelCorso';
        clas.students = [0, 1, 2];
        var valid = classes_logic.validate_create(clas);
        expect(valid).toBe(true);

    });



    test('Validate wrong_create_class', () => {

        var clas;
        var valid = classes_logic.validate_create(clas);
        expect(valid).toBe(false);
        
        clas = db.get_class_obj();
        clas.name = 0;
        clas.students = [0, 1, 2];
        valid = classes_logic.validate_create(clas);
        expect(valid).toBe(false);

        clas.name = [0, 1, 2];
        clas.students = [0, 1, 2];
        valid = classes_logic.validate_create(clas);
        expect(valid).toBe(false);

    });



    test('Validate wrong_students_array',() => {

        var students = ['a', 'b', 'c'];
        var valid = classes_logic.validate_array(students);
        expect(valid).toBe(false);

        students = 0;
        valid = classes_logic.validate_array(students);
        expect(valid).toBe(false);

        students = 'ciao';
        valid = classes_logic.validate_array(students);
        expect(valid).toBe(false);

    });



    test('Validate correct_created_class', () => {

        var clas = db.get_class_obj();
        clas.name = 'NomdeDelCorso';
        clas.students = [0, 1, 2];
        var valid = classes_logic.add_class(clas);
        expect(valid).toEqual(clas);

    });



    test('Validate wrong_created_class', () => {

        var clas = db.get_class_obj();
        let valid = () => { 

            classes_logic.add_class(clas);

        }
        expect(valid).toThrow();


        clas.name = 0;
        clas.students = [0, 1, 2];
        valid = () => { 

            classes_logic.add_class(clas);

        }
        expect(valid).toThrow();

        clas.name = [0, 1, 2];
        clas.students = [0, 1, 2];
        valid = () => { 

            classes_logic.add_class(clas);

        }
        expect(valid).toThrow();

        clas.name = 'NomdeDelCorso';
        clas.students = ['a', 'b', 'c'];
        valid = () => { 

            classes_logic.add_class(clas);

        }
        expect(valid).toThrow();

        clas.name = 'NomdeDelCorso';
        clas.students = 0;
        valid = () => { 

            classes_logic.add_class(clas);

        }
        expect(valid).toThrow();

        clas.name = 'NomdeDelCorso';
        clas.students = 'ciao';
        valid = () => { 

            classes_logic.add_class(clas);

        }
        expect(valid).toThrow();

    });



    test('Validate correct_id', () => {

        var id = 0;
        var valid = classes_logic.validate_id(id);
        expect(valid).toBe(true);

    });



    test('Validate wrong_id', () => {

        var id = 'carlino';
        var valid = classes_logic.validate_id(id);
        expect(valid).toBe(false);

        id = -7;
        valid = classes_logic.validate_id(id);
        expect(valid).toBe(false);

    });



    test('Get existing_class_by_id', () => {

        var clas = db.get_class_obj();
        clas.id = 0;
        db.classes[clas.id] = clas;
        var valid = classes_logic.get_class_by_id(clas.id);
        expect(valid).toBe(clas);

    });


    
    test('Get not_existing_class_by_id', () => {

        var id = 33;
        let valid = () => { 

            classes_logic.get_class_by_id(id);

        }
        expect(valid).toThrow();

    });

});