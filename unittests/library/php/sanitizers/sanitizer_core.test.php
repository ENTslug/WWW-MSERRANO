<?php

class sanitizer_coreTest extends UnitTestCase {

    protected $rnd;

    function setUp() {
        $this->rnd = random_int(0, 200);
    }

    function tearDown() {
        
    }

    function test_defaulted() {
        $this->helper_test_cases($this->rnd, 'defaulted');
    }

    function test_value() {
        $this->helper_test_cases(null, 'value');
    }

    function helper_test_cases($defalt, $method_to_test) {
        $tests = array(
            // CASE: empty
            array(__LINE__,
                array('ut' => ''), // array
                '', // type
                $defalt, // expected
            ),
            // CASE: boolean - bad
            array(__LINE__,
                array('ut' => 'not a bool'),
                cst_sanitizer::sane_boolean,
                $defalt,
            ),
            // CASE: boolean - good
            array(__LINE__,
                array('ut' => true),
                cst_sanitizer::sane_boolean,
                true,
            ),
            // CASE: email - bad
            array(__LINE__,
                array('ut' => true),
                cst_sanitizer::sane_email,
                $defalt,
            ),
            // CASE: email - invalid
            array(__LINE__,
                array('ut' => '@example.net'),
                cst_sanitizer::sane_email,
                $defalt,
            ),
            // CASE: email - good
            array(__LINE__,
                array('ut' => 'no-reply@mserrano.net'),
                cst_sanitizer::sane_email,
                'no-reply@mserrano.net',
            ),
            // CASE: string - strip tags
            array(__LINE__,
                array('ut' => '<script>console.log(\'bad\')</script>'),
                cst_sanitizer::sane_string,
                $defalt,
            ),
            // CASE: string - I would never need to pass '../' in a string
            array(__LINE__,
                array('ut' => '../../../../../../../../etc/passwd'),
                cst_sanitizer::sane_string,
                'etc/passwd',
            ),
            // CASE: string - strip tags with other logic invoked
            array(__LINE__,
                array('ut' => '<script>console.log(\'../../../../../../../../etc/passwd\')</script>../../'),
                cst_sanitizer::sane_string,
                $defalt,
            ),
            // CASE: string - good
            array(__LINE__,
                array('ut' => sprintf('%s i am a string', $this->rnd + 2)),
                cst_sanitizer::sane_string,
                sprintf('%s i am a string', $this->rnd + 2),
            ),
            // CASE: integer - bad
            array(__LINE__,
                array('ut' => '6not an integer'),
                cst_sanitizer::sane_integer,
                $defalt,
            ),
            // CASE: integer - bad, not an int
            array(__LINE__,
                array('ut' => 20.6),
                cst_sanitizer::sane_integer,
                $defalt,
            ),
            // CASE: integer - good
            array(__LINE__,
                array('ut' => $this->rnd * -20),
                cst_sanitizer::sane_integer,
                $this->rnd * -20,
            ),
            // CASE: integer - good
            array(__LINE__,
                array('ut' => '20'),
                cst_sanitizer::sane_integer,
                20,
            ),
            // CASE: float - bad
            array(__LINE__,
                array('ut' => '20.6l'),
                cst_sanitizer::sane_float,
                $defalt,
            ),
            // CASE: float - good, float as string
            array(__LINE__,
                array('ut' => '20.6'),
                cst_sanitizer::sane_float,
                20.6,
            ),
            // CASE: float - good
            array(__LINE__,
                array('ut' => $this->rnd + 20),
                cst_sanitizer::sane_float,
                $this->rnd + 20,
            ),
            // CASE: float - good
            array(__LINE__,
                array('ut' => $this->rnd + 20.6),
                cst_sanitizer::sane_float,
                $this->rnd + 20.6,
            ),
            // CASE: date - bad
            array(__LINE__,
                array('ut' => '3/21/2018'),
                cst_sanitizer::sane_date,
                $defalt,
            ),
            // CASE: date - good
            array(__LINE__,
                array('ut' => '2018-03-21'),
                cst_sanitizer::sane_date,
                '2018-03-21',
            ),
            // CASE: date - bad
            array(__LINE__,
                array('ut' => '3/21/2018 12:03:03'),
                cst_sanitizer::sane_datetime,
                $defalt,
            ),
            // CASE: date - good
            array(__LINE__,
                array('ut' => '2018-03-21 12:03:03'),
                cst_sanitizer::sane_datetime,
                '2018-03-21 12:03:03',
            ),
        );
        foreach ($tests as $vars) {
            list($line, $arr, $typ, $exp) = $vars;
            $val     = 'ut'; // array key
            $defalt  = $this->rnd;
            $err_msg = "{$line} - %s";

            if ($method_to_test === 'defaulted') {
                $res = sanitizer_core::defaulted($arr, $val, $typ, $defalt);
            } else if ($method_to_test === 'value') {
                $res = sanitizer_core::value($arr['ut'], $typ);
            }
            $this->assertEqual($exp, $res, $err_msg);
        }
    }

}
