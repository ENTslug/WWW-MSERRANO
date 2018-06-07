<?php

class my_portfolio extends page_base {

    use page_sanitizer;

    public function __destruct() {
        $this->destruct_page_sanitizer();
    }

    public function build(output $output) {
        $options = new sanitizer_config();
        $options->register_set('post', $this->post, cst_sanitizer::type_json);

        $this->_build_sanitizer($output, $options);
    }

    public function build_sanitizer(output $output) {
        $this->sanitizer->queue_item('post', cst_portfolio::p_has_access, cst_sanitizer::sane_boolean);
        $continue = $this->sanitizer->run_it();

        if ($continue === true) {
            $has_access   = $this->sanitizer->get('post', cst_portfolio::p_has_access);
            $list_project = $this->retrieve_projects($has_access);
        }

        if ($continue === true) {
            $this->response[cst_portfolio::p_list_project] = $list_project;
            $this->set_response_pass();
        }
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function retrieve_projects(bool $has_access): array {
        $return = array();
        if ($has_access === true) {
            $return = array(
                array(
                    cst_portfolio::p_title => 'Cygnus Management, LLC',
                    cst_portfolio::p_url   => 'cygnusmgmt-production.herokuapp.com',
                    cst_portfolio::p_thumb => '/resources/portfolio/cygnus/cygnus_thumb.png',
                ),
                array(
                    cst_portfolio::p_title => 'www.hospitalitypulse.net (2014-2017)',
                    cst_portfolio::p_url   => '',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'mobilePulse',
                    cst_portfolio::p_url   => '',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'Internal Console',
                    cst_portfolio::p_url   => '',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'pulseBooker Consumer Version',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'pulseLink (2018)',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'pulseBooker Central Reservation Office (CRO)',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'LAB-MSERRANO',
                    cst_portfolio::p_url   => 'lab.mserrano.net',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'DevOps',
                    cst_portfolio::p_url   => '',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'WWW-MSERRANO',
                    cst_portfolio::p_url   => 'www.mserrano.net',
                    cst_portfolio::p_thumb => '',
                ),
                array(
                    cst_portfolio::p_title => 'DOCS-MSERRANO',
                    cst_portfolio::p_url   => 'docs.mserrano.net',
                    cst_portfolio::p_thumb => '',
                ),
            );
        }
        return $return;
    }

}
