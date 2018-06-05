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
                // DevOps
                array(
                    cst_portfolio::p_title => 'DevOps',
                    cst_portfolio::p_thumb => '',
                ),
                // LAB-MSERRANO
                array(
                    cst_portfolio::p_title => 'lab.mserrano.net',
                    cst_portfolio::p_thumb => '',
                ),
                // WWW-MSERRANO
                array(
                    cst_portfolio::p_title => 'www.mserrano.net',
                    cst_portfolio::p_thumb => '',
                ),
                // DOCS-MSERRANO
                array(
                    cst_portfolio::p_title => 'docs.mserrano.net',
                    cst_portfolio::p_thumb => '',
                ),
            );
        }
        return $return;
    }

}
