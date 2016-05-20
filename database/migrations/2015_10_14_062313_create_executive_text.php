<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExecutiveText extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('executive_text', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('client_id');
            $table->integer('report_id');
            $table->text('text1');
            $table->text('text2');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::drop('executive_text');
    }
}
