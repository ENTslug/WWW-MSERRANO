<?php

class impl_page_sanitizer extends page_base {

    use page_sanitizer;

    public $options;

    public function build(output $output) {
        $this->_build_sanitizer($output, $this->options);
    }

    public function build_sanitizer(output $output) {
        
    }

    public function get() {
        return $this->get;
    }

    public function post() {
        return $this->post;
    }

    public function response() {
        return $this->response;
    }

}

class page_sanitizerTest extends UnitTestCase {

    public $rnd;
    public $input;

    function setUp() {
        $this->rnd   = $rnd         = random_int(0, 200);
        $this->input = new input($rnd + 0, $rnd + 1);
    }

    function tearDown() {
        $this->input = null;
    }

    function test___construct() {
        $obj          = new impl_page_sanitizer();
        $obj->options = new sanitizer_config();
        $res          = (is_a($obj, 'page_base') === true);
        $this->assertTrue($res);

        $output = new output();
        $obj->build($output);

        $sanitizer = helper_ut::val($obj, 'sanitizer');
        $res       = (is_a($sanitizer, 'sanitizer_manager') === true);
        $this->assertTrue($res);
    }

    function test_build_sanitizer() {
        helper_bash::skip_abstract(__METHOD__);
    }

    function test_destruct_page_sanitizer() {
        $obj          = new impl_page_sanitizer();
        $obj->options = new sanitizer_config();
        $output       = new output();
        $obj->build($output);

        $sanitizer = helper_ut::val($obj, 'sanitizer');
        $res       = (is_a($sanitizer, 'sanitizer_manager') === true);
        $this->assertTrue($res);

        $obj->destruct_page_sanitizer();

        $sanitizer = helper_ut::val($obj, 'sanitizer');
        $res       = (is_a($sanitizer, 'sanitizer_manager') === true);
        $this->assertFalse($res);
    }

}
